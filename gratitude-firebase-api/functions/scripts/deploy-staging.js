const shell = require('shelljs')
const chalk = require('chalk')
const algolia = require('../credentials/algolia.json')
const appleKeys = require('../credentials/apple-keys.json')
const authy = require('../credentials/authy.json')
const aws = require('../credentials/aws.json')
const charityNavigator = require('../credentials/charity-navigator.json')
const dwollaTest = require('../credentials/dwolla-test.json')
const firebaseStaging = require('../credentials/gratitude-staging-firebase-adminsdk-hb5ys-9db548ca92.json')
const plaidTest = require('../credentials/plaid-test.json')
const plaid = require('../credentials/plaid.json')
const sendgrid = require('../credentials/sendgrid.json')
const stripe = require('../credentials/stripe.json')
const twilio = require('../credentials/twilio.json')

// TODO if all credentials are present, run this
credentialSuccessHandle = () => {
  shell.echo(chalk.greenBright('*****************************************'))
  shell.echo(chalk.greenBright('****** CHECK CREDENTIALS SUCCESS! *******'))
  shell.echo(chalk.greenBright('*****************************************'))
  shell.exec('firebase use staging && firebase deploy --only functions')
}

// TODO if a credential is missing, throw error
credentialErrorHandle = message => {
  shell.echo(chalk.red('***********************************************'))
  shell.echo(chalk.red('DEPLOY FAILED!: Some credentials were missed!'))
  shell.echo(chalk.red('There is no ' + message + '.'))
  shell.echo(chalk.red('Please add this credential.'))
  shell.echo(chalk.red('***********************************************'))
  shell.exit(1)
}

// TODO check to make sure all required credentials are present
// Check Algolia Credentials
!algolia.applicationId && credentialErrorHandle('Algolia Application Id')
!algolia.adminAPIKey && credentialErrorHandle('Algolia Admin API Key')
!algolia.searchOnlyAPIKey &&
  credentialErrorHandle('Algolia Search Only API Key')
!algolia.devIndexName && credentialErrorHandle('Algolia Development Indexname')
!algolia.prodIndexName && credentialErrorHandle('Algolia Production Indexname')

// Check Apple Key Credentials
!appleKeys.exportPassword && credentialErrorHandle('Apple Key Export Password')

// Check Authy Credentials
!authy.APPLICATION_NAME && credentialErrorHandle('Authy Application Name')
!authy.APPLICATION_ID && credentialErrorHandle('Authy Application Id')
!authy.PRODUCTION_API_KEY && credentialErrorHandle('Authy Production API Key')

// Check AWS Credentials
!aws.awsId && credentialErrorHandle('AWS Id')
!aws.awsSecret && credentialErrorHandle('AWS Secret')
!aws.assocId && credentialErrorHandle('AWS Assoc Id')

// Check Charity Navigator Credentials
!charityNavigator.APPLICATION_KEY &&
  credentialErrorHandle('Charity Navigator Application Key')

// Check Dwolla Test Credentials
!dwollaTest.KEY && credentialErrorHandle('Dwolla Test Key')
!dwollaTest.SECRET && credentialErrorHandle('Dwolla Test Secret')
!dwollaTest.ENVIRONMENT && credentialErrorHandle('Dwolla Test Environment')

// Check Firebase Staging Credentials
!firebaseStaging.type && credentialErrorHandle('Firebase Staging Type')
!firebaseStaging.project_id &&
  credentialErrorHandle('Firebase Staging Project Id')
!firebaseStaging.private_key_id &&
  credentialErrorHandle('Firebase Staging Private Key Id')
!firebaseStaging.private_key &&
  credentialErrorHandle('Firebase Staging Private Key')
!firebaseStaging.client_email &&
  credentialErrorHandle('Firebase Staging Client Email')
!firebaseStaging.client_id &&
  credentialErrorHandle('Firebase Staging Client Id')
!firebaseStaging.auth_uri && credentialErrorHandle('Firebase Staging Auth URI')
!firebaseStaging.token_uri &&
  credentialErrorHandle('Firebase Staging Token URI')
!firebaseStaging.auth_provider_x509_cert_url &&
  credentialErrorHandle('Firebase Staging Auth Provider x509 Cert URL')
!firebaseStaging.client_x509_cert_url &&
  credentialErrorHandle('Firebase Staging Client x509 Cert URL')

// Check Plaid Test Credentials
!plaidTest.PLAID_CLIENT_ID && credentialErrorHandle('Plaid Test Client Id')
!plaidTest.PLAID_SECRET && credentialErrorHandle('Plaid Test Secret')
!plaidTest.PLAID_PUBLIC_KEY && credentialErrorHandle('Plaid Test Public Key')
!plaidTest.PLAID_PRODUCTS && credentialErrorHandle('Plaid Test Products')
!plaidTest.PLAID_ENV && credentialErrorHandle('Plaid Test ENV')

// Check Plaid Credentials
!plaid.PLAID_CLIENT_ID && credentialErrorHandle('Plaid Client Id')
!plaid.PLAID_SECRET && credentialErrorHandle('Plaid Secret')
!plaid.PLAID_PUBLIC_KEY && credentialErrorHandle('Plaid Public Key')
!plaid.PLAID_PRODUCTS && credentialErrorHandle('Plaid Products')
!plaid.PLAID_ENV && credentialErrorHandle('Plaid ENV')

// Check Sendgrid Credentials
!sendgrid.sendgridSecretKey && credentialErrorHandle('Sendgrid Secret Key')

// Check Stripe Credentials
!stripe.publishableKey && credentialErrorHandle('Stripe Publichable Key')
!stripe.secretKey && credentialErrorHandle('Stripe Secret Key')
!stripe.publishableKeyTest &&
  credentialErrorHandle('Stripe Test Publichable Key')
!stripe.secretKeyTest && credentialErrorHandle('Stripe Test Secret Key')

// Check Twilio Credentials
!twilio.accountSid && credentialErrorHandle('Twilio Accounts Id')
!twilio.authToken && credentialErrorHandle('Twilio AuthToken')

credentialSuccessHandle()

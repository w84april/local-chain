
// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {

  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const DaiToken = await ethers.getContractFactory('DaiToken');

  // Deploy the contract
  console.log('Deploying DaiToken...');
  const daiToken = await DaiToken.deploy();
  await daiToken.waitForDeployment();
  console.log(`DaiToken deployed to: ${daiToken.target}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
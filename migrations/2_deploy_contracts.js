const Migrations = artifacts.require("Migrations");
const zombiefactory  = artifacts.require("./ZombieFactory")
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(zombiefactory);
};

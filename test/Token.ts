import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token", function () {
  describe("Test Contract Deployment", () => {
    it("Deploying contract.", async () => {
      const [owner] = await ethers.getSigners();
      const Token = await ethers.getContractFactory("Token");
      const token = await Token.deploy("1000000000000000000");
      await token.deployed();
      expect(await token.balanceOf(owner.address)).to.equal(
        "1000000000000000000"
      );
    });
  });
});

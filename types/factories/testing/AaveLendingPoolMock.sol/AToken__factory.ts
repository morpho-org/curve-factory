/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  AToken,
  ATokenInterface,
} from "../../../testing/AaveLendingPoolMock.sol/AToken";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class AToken__factory {
  static readonly abi = _abi;
  static createInterface(): ATokenInterface {
    return new utils.Interface(_abi) as ATokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AToken {
    return new Contract(address, _abi, signerOrProvider) as AToken;
  }
}

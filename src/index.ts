import Helper from "./helper.js";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez un message de salutation : ", (answer) => {
  let h = new Helper();
  h.LogHello(`${answer}`);
  rl.close();
});

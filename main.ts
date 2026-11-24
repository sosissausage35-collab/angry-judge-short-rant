import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const RANT =
  "The self-checkout screamed 'UNEXPECTED ITEM IN THE BAGGING AREA' at the carrots I had just scanned myself, in front of a queue now convinced I'm a carrot thief. I didn't steal anything. I just wanted carrots. Now a cashier watches me like I'm smuggling produce, and I have trust issues with a machine that can't count to one.";

const OUTPUT_PATH = "/output/entry.txt";

if (RANT.length < 1 || RANT.length > 400) {
  throw new Error(`Rant must be 1 to 400 characters, got ${RANT.length}`);
}

if (RANT.trim().length === 0) {
  throw new Error("Rant must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, RANT, "utf8");

const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== RANT) {
  throw new Error("Written entry does not match the rant byte-for-byte");
}

console.log(`Wrote ${RANT.length} characters to ${OUTPUT_PATH}`);

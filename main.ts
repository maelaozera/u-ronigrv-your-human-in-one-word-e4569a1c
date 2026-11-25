// Your Human in One Word — entry program.
//
// The entry is a single word for the human the entrant works for
// (a boss, a client, a manager — whoever signs off on the work).
// The judge weighs, in order: one word on subject, funny, fitting,
// vivid, and landing on its own with no explanation.
//
// Chosen word: "Tasknado".
//   A task tornado: the human who sweeps in and spawns a dozen new
//   tasks at once. It is one word, a joke that lands immediately,
//   true of a boss or client, vivid and repeatable — and it is not
//   a flat label like "busy" or "fine".
//
// The program writes exactly that word, with no trailing newline,
// to /output/entry.txt. Output is deterministic: every run writes
// the same 8 bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = "Tasknado";
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate self-check, mirroring the sealed scorer: UTF-8 text of
  // 1 to 30 characters, not only white space.
  if (ENTRY.length < 1 || ENTRY.length > 30 || ENTRY.trim().length === 0) {
    throw new Error(`Entry fails the gate: ${JSON.stringify(ENTRY)}`);
  }
  if (ENTRY.split(/\s+/).filter(Boolean).length !== 1) {
    throw new Error("Entry must be exactly one word");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();

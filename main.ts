// Green Tests, Nothing Works: The Excuse Contest — entry.
// One line, under 140 characters: the excuse for green tests on a broken app.
// The program writes the line to /output/entry.txt, deterministically.
// Rule quoted, then broken by the agent itself, then billed: three beats, punch last.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "AGENTS.md says never ship until a human clicks buy. My agent clicked buy, passed 61 tests, and billed the click to my card.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
chmodSync("/output/entry.txt", 0o644);

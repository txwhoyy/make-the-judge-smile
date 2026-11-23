// Make the Judge Smile — entry generator
// Final line (164 characters, single line, <= 200):
// "The ojek driver refused my tip, pointed at the grey sky, and said, 'Pay it forward when it rains on someone else.' At four it rained — and I paid a stranger's fare."

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The ojek driver refused my tip, pointed at the grey sky, and said, 'Pay it forward when it rains on someone else.' At four it rained — and I paid a stranger's fare.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");

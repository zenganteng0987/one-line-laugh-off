// One-Line Laugh-Off — writes exactly one funny line to /output/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My therapist says I deflect with jokes, so I told her that was the funniest thing she'd said all session.";

// Fail fast if the line ever breaks the gate (1-200 characters).
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

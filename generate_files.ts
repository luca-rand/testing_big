await Deno.remove("./src", { recursive: true }).catch(() => {});
await Deno.mkdir("./src");

const TOTAL = 1024 * 1024 * 25;
const PER_FILE = 1024 * 1024;

for (let i = 0; i < Math.round(TOTAL / PER_FILE); i++) {
  const array = new Uint8Array(PER_FILE);
  await Deno.writeFile(`./src/${i}.bin`, array);
}

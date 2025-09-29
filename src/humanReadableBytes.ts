import { type } from "@tauri-apps/plugin-os";
import prettyBytes from "pretty-bytes";

export function humanReadableBytes(bytes: number) {
  return prettyBytes(bytes, { binary: type() === "windows" });
}

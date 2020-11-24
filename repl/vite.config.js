import httpImport from "import-http/rollup";

export default {
  base: process.env.NODE_ENV === "production" ? "/changelog" : "/",
  assetsDir: "./",
  rollupInputOptions: {
    plugins: [httpImport()],
  },
};

export default [
  {
    files: ["**/*.js", "**/*.mjs"],
    ignores: ["node_modules/**", ".code-quality-action/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"]
    }
  }
];

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  testMatch: ['src/**/*.test.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};
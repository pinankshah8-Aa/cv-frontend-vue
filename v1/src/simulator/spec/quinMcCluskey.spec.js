import BooleanMinimize from "../src/quinMcCluskey";

describe("Boolean minimization", () => {
  test.each([
    [3, [0, 1, 3, 4], ["0-1", "-00"]],
    [4, [0, 1, 2, 9], ["-001", "00-0"]],
  ])("returns a minimal cover for %i variables and minterms %j", (numVars, minTerms, expected) => {
    const result = new BooleanMinimize(numVars, minTerms).result;

    expect(result).toHaveLength(expected.length);
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});

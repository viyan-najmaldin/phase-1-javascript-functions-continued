function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun(""));
let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
function wrapAdjective(String = "*") {
  return function (name = "spectal") {
    return `You are ${String}${name}${String}!`;
  };
}
console.log(wrapAdjective("||")("a dedicated programmer"));

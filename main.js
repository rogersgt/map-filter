console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});

////////////// Answer 1 //////////////////////
var priceArray = _.map(items, function(el){
return el.price;
});

var sum = priceArray.reduce(function(a, b){
  return a + b;
});

var average = sum / priceArray.length;

$('#answer1').html(Math.round(average * 100) / 100);

////////////// Answer 2 //////////////////////
var filterArray = _.filter(items, function(el){
  if(el.price > 14 && el.price < 18){
    return el;
  }
});

var filterDisplay = _.map(filterArray, function(el){
  return el.title;
});

$('#answer2').text(filterDisplay);

////////////// Answer 3 ///////////////////////
var currencyArray = _.map(items, function(el){
  return {
    cCode: el.currency_code,
    title: el.title,
    price: el.price
  };
});

var cur = _.filter(currencyArray, function(el){
  if(el.cCode === "GBP"){
    return el;
  }
});

var gbp_arr = cur[0];

$('#answer3').text(gbp_arr.title);

/////////////////// Answer 4 ////////////////////////
var Material = _.filter(items, function(el){
return _.contains(el.materials, "wood");
});
var finalArray = _.map(Material, function(el){
  return el.title
});

$('#answer4').text(finalArray);

////////////////// Answer 5 /////////////////////////
var eightOrMore = _.filter(items, function(el){
  if(el.materials.length >= 8){
    return el;
  }
})

var display = _.map(eightOrMore, function(el){
  return el.title + "number:" + el.materials.length + "material:"  + el.materials;
});

$('#answer5').text(display);

////////////////////// Answer 6 /////////////////////
var madeby = _.filter(items, function(el){
  if(el.who_made === "i_did"){
    return el;
  }
});

var itemAmount = madeby.length;

$('#answer6').text(itemAmount);

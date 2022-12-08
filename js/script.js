// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-JS/sw.js", {
    scope: "/ICS2O-Unit5-07-JS/",
  })
}

/**
 * This function calculates the sum of natural numbers.
 */
function myButtonClicked() {
  var numN = parseFloat(document.getElementById("integer-n").value)
  var sum = 0
  var counter = 0
  var loop = 0

  for (let loop = 0; loop < numN; loop++) {
    counter++
    sum = sum + counter
    document.getElementById("sum").innerHTML =
      "The total sum equals " + sum + ".<br>"
  }
}

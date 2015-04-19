if (Meteor.isClient) {
  Meteor.startup(function () {
    // code to run on server at startup
Reveal.initialize({

    // Display controls in the bottom right corner
    controls: true


});

Reveal.configure({
    theme: 'beige',
    transition: 'zoom'
});

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

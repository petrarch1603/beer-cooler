Vue.component('beer', {
  template: "#beer-template",
  props: ['beer'],
  data: function() {
    return {
      upvoted: false,
      downvoted: false
    };
  },
  methods: {
    upvote: function () {
      this.upvoted = !this.upvoted;
      this.downvoted = false;
      console.log(this.beer.votes)
    },
    downvote: function () {
      this.downvoted = !this.downvoted;
      this.upvoted = false;
    }
  },
  computed: {
    votes: function () {
      if (this.upvoted) {
        return this.beer.votes + 1;
      } else if (this.downvoted) {
        return this.beer.votes - 1;
      } else {
        return this.beer.votes;
      }
    }
  }
});
var vm = new Vue({
  el: "#app",
  data: {
    beers: [{
      name: "Pabst Blue Ribbon",
      votes: 10,
      image: ''
    },
    {
      name: "Coors Light",
      votes: 2,
      image: ''
    },
    {
      name: "Budweiser",
      votes: 7,
      image: ''
    }]
  }
});


// This is an unfinished function to apply an image icon to the beers.
//
// vm.beers.forEach( function(beer) {
//   if (beer.name === 'Pabst Blue Ribbon') {
//     beer.image = 'pbr.png'
//   } else {
//     beer.image = 'generic.png'
//   }
//   console.log(beer.image)
// })
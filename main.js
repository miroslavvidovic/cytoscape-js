$(function(){ // on dom ready

var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(id)'
      })
    .selector('edge')
      .css({
        'target-arrow-shape': 'triangle',
        'width': 4,
        'line-color': '#ddd',
        'target-arrow-color': '#ddd',
        'curve-style': 'bezier'
      })
    .selector('.highlighted')
      .css({
        'background-color': '#61bffc',
        'line-color': '#61bffc',
        'target-arrow-color': '#61bffc',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s'
      }),

  elements: {
      nodes: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'c' } },
        { data: { id: 'd' } },
        { data: { id: 'e' } },
        { data: { id: 'f' } },
        { data: { id: 'g' } },
        { data: { id: 'h' } },
        { data: { id: 'i' } },
        { data: { id: 'j' } },
        { data: { id: 'k' } }
      ],

      edges: [
        { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
        { data: { id: 'ac', weight: 1, source: 'a', target: 'c' } },
        { data: { id: 'ad', weight: 2, source: 'a', target: 'd' } },
        { data: { id: 'cb', weight: 2, source: 'c', target: 'b' } },
        { data: { id: 'ce', weight: 1, source: 'c', target: 'e' } },
        { data: { id: 'cf', weight: 1, source: 'c', target: 'f' } },
        { data: { id: 'cg', weight: 1, source: 'c', target: 'g' } },
        { data: { id: 'gh', weight: 1, source: 'g', target: 'h' } },
        { data: { id: 'gi', weight: 1, source: 'g', target: 'i' } },
        { data: { id: 'gj', weight: 1, source: 'g', target: 'j' } },
        { data: { id: 'gk', weight: 1, source: 'g', target: 'k' } }
      ]
    },

  layout: {
    name: 'breadthfirst',
    fit: false,
    directed: false,
    roots: '#a',
    padding: 10
  }
});

var bfs = cy.elements().bfs('#a', function(){}, true);

var i = 0;
var highlightNextEle = function(){
  if( i < bfs.path.length ){
    bfs.path[i].addClass('highlighted');

    i++;
    setTimeout(highlightNextEle, 1000);
  }
};

// kick off first highlight
highlightNextEle();

}); // on dom ready

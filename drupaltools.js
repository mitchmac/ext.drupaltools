define(function(require, exports, module) {

var ext = require("core/ext");
var ide = require("core/ide");

var menus = require("ext/menus/menus");

module.exports = ext.register("ext/drupaltools/drupaltools", {
    name    : "Drupal Tools",
    dev     : "Mitch MacKenzie",
    alone   : true,
    deps    : [],
    type    : ext.GENERAL,

    nodes : [],
    init : function(){
        var _self = this;
        var drupalMenu = new apf.menu();
        this.nodes.push(
            menus.addItemByPath("Drupal/", drupalMenu, 90000)
        );
    },
    enable : function(){

    },
    disable : function(){

    },
    destroy : function(){

    }
});
});
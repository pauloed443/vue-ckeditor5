!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueCkeditor=t():e.VueCkeditor=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={name:"vue-ckeditor",render:function(e){return e(this.tag,{attrs:this.$attrs})},props:{config:{default:function(){return{language:"en"}},required:!1,type:Object},editors:{default:function(){return{}},required:!1,type:Object},readonly:{default:function(){return!1},required:!1,type:Boolean},emptyValue:{required:!1,type:String},tag:{default:function(){return"div"},required:!1,type:String},toolbarContainer:{default:function(){return null},required:!1,type:String},type:{required:!0,type:String},value:{default:function(){return""},required:!1,type:String}},data:function(){return{instance:null}},watch:{value:function(e){var t=this.instance;null==t||e===t.getData()||this.emptyValueProvided&&e===this.emptyValue||t.setData(e)}},computed:{emptyValueProvided:function(){return Object.prototype.hasOwnProperty.call(this.$options.propsData,"emptyValue")},isEmpty:function(){var e=this.instance.model.document;return!e.model.hasContent(e.getRoot())}},methods:{create:function(){var e=this;if(null==this.instance){var t=this.type,n=this.$VueCkeditorEditors||this.editors;if(!Object.keys(n).length)throw new Error("There are no CKEditor 5 implementations.");var r=n[t];if(null==r)throw new Error("Wrong key '".concat(t,"'. Allowed keys: ").concat(Object.keys(n)));r.create(this.$el,this.config).then((function(t){e.instance=t;var n=e.instance;e.createToolbarContainer(),e.setEventListeners(),n.isReadOnly=e.readonly,n.setData(e.value),e.$emit("ready",n)})).catch((function(e){console.log(e)}))}},createToolbarContainer:function(){var e=this.instance,t=this.toolbarContainer;if(null!=t&&null!=e){var n=document.querySelector(t);null!=n&&n.appendChild(e.ui.view.toolbar.element)}},destroy:function(){var e=this.instance;null!=e&&(e.destroy(),this.$emit("destroy",e))},setEventListeners:function(){var e=this,t=this.instance;if(null!=t){t.model.document.on("change:data",(function(){var n=t.getData();if(e.value!==n){e.emptyValueProvided&&e.isEmpty&&(n=e.emptyValue);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];e.$emit.apply(e,["input",n,t].concat(o))}}));for(var n=t.editing.view.document,r=n._events,o=function(){var r=u[i];n.on(r,(function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];e.$emit.apply(e,[r,t].concat(o))}))},i=0,u=Object.keys(r);i<u.length;i++)o()}}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}},o={version:"0.5.0",component:r,plugin:{install:function(e,t){var n=t.name,o=t.editors;e.prototype.$VueCkeditorEditors=o||{},e.component(n||r.name,r)}}};t.default=o}]).default}));
//# sourceMappingURL=vue-ckeditor5.js.map
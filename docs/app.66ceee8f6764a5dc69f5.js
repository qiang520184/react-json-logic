webpackJsonp([1],{0:function(e,t,r){e.exports=r(195)},192:function(e,t,r){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.applyLogic=void 0;var o=r(8),a=n(o),i=r(5),l=n(i);t.applyLogic=a.default.apply,t.default=l.default},function(e,t){e.exports=r(53)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),s=n(u),f=r(6),c=n(f),p=r(7),d=u.PropTypes.string,b=u.PropTypes.func,h=u.PropTypes.object,y=u.PropTypes.oneOfType,g={field:d,onChange:b,parent:d,value:y([h,d])},m={field:"",value:{}},v=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));_.call(r);var n=e.value,i=e.field;return Object.keys(n).length>0&&!function(){var e=Object.keys(n)[0];i=p.OPERATORS.some(function(t){return t.signature===e})?e:"value"}(),r.state={field:i,value:n},r}return i(t,e),l(t,[{key:"render",value:function(){var e=this.state.field,t=p.OPERATORS.find(function(t){return t.signature===e});return s.default.createElement("div",null,s.default.createElement(c.default,{value:e,options:this.getAvailableOperators(),onChange:this.onFieldChange}),t&&s.default.createElement("div",{style:{marginLeft:20,marginTop:5,marginBottom:5}},t.fields.map(this.renderChild)))}}]),t}(u.Component),_=function(){var e=this;this.onFieldChange=function(t){var r={};"value"===t?r="":r[t]=[],e.setState({field:t,value:r}),e.props.onChange(r)},this.onChildValueChange=function(t,r){var n=e.state.field,o=e.state.value;"value"===n?o=t:o[n][r]=t,e.setState({value:o}),e.props.onChange(o)},this.getAvailableOperators=function(){var t=e.props.parent;return p.OPERATORS.filter(function(e){return!e.notAvailableUnder.some(function(e){return e===t})})},this.renderChild=function(t,r){var n=e.state.field,o=e.state.value,a=t.default,i="";return i="value"!==n?o[n][r]:o,s.default.createElement(a,{key:n+"."+r,parent:n,value:i,onChange:function(t){return e.onChildValueChange(t,r)}})}};v.propTypes=g,v.defaultProps=m,t.default=v},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o),i=o.PropTypes.string,l=o.PropTypes.func,u={name:i,onChange:l,value:i},s=function(e){var t=e.name,r=e.onChange,n=e.value;return a.default.createElement("div",null,a.default.createElement("input",{name:t,onChange:function(e){return r(e.target.value)},defaultValue:n,placeholder:"Accessor"}))};s.propTypes=u,t.default=s},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o),i=o.PropTypes.string,l=o.PropTypes.func,u={name:i,onChange:l,value:i},s=function(e){var t=e.name,r=e.onChange,n=e.value;return a.default.createElement("div",null,a.default.createElement("input",{name:t,onChange:function(e){return r(e.target.value)},defaultValue:n}))};s.propTypes=u,t.default=s},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),s=n(u),f=r(2),c=n(f),p=u.PropTypes.func,d=u.PropTypes.object,b={onChange:p,value:d},h={value:{}},y=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onChange=function(e){return r.setState({value:e},function(){return r.props.onChange(e)})},r.state={value:e.value},r}return i(t,e),l(t,[{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(c.default,{parent:"master",onChange:this.onChange,value:this.state.value}))}}]),t}(u.Component);y.propTypes=b,y.defaultProps=h,t.default=y},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o),i=o.PropTypes.string,l=o.PropTypes.array,u=o.PropTypes.func,s={value:i,options:l,onChange:u},f=function(e){var t=e.value,r=e.options,n=e.onChange;return a.default.createElement("div",null,a.default.createElement("select",{value:t,onChange:function(e){return n(e.target.value)}},a.default.createElement("option",{value:"",disabled:!0},"Select an Operator"),r.map(function(e,t){return a.default.createElement("option",{key:t,value:e.signature},e.label)})))};f.propTypes=s,t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.FIELD_TYPES={ANY:r(2),INPUT:r(4),ACCESSOR:r(3)};t.OPERATORS=[{signature:"value",label:"value",fields:[n.INPUT],notAvailableUnder:["master","or","and"]},{signature:"var",label:"accessor",fields:[n.ACCESSOR],notAvailableUnder:["master"]},{signature:"or",label:"or",fields:[n.ANY,n.ANY],notAvailableUnder:[]},{signature:"and",label:"and",fields:[n.ANY,n.ANY],notAvailableUnder:[]},{signature:"===",label:"===",fields:[n.ANY,n.ANY],notAvailableUnder:[]},{signature:"==",label:"==",fields:[n.ANY,n.ANY],notAvailableUnder:[]},{signature:"<=",label:"<=",fields:[n.ANY,n.ANY],notAvailableUnder:[]},{signature:">=",label:">=",fields:[n.ANY,n.ANY],notAvailableUnder:[]},{signature:"<",label:"<",fields:[n.ANY,n.ANY],notAvailableUnder:[]},{signature:">",label:">",fields:[n.ANY,n.ANY],notAvailableUnder:[]},{signature:"!=",label:"!=",fields:[n.ANY,n.ANY],notAvailableUnder:[]},{signature:"!==",label:"!==",fields:[n.ANY,n.ANY],notAvailableUnder:[]}]},function(e,t,r){var n,o;!function(a,i){n=i,o="function"==typeof n?n.call(t,r,t,e):n,!(void 0!==o&&(e.exports=o))}(this,function(){"use strict";Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.unique||(Array.prototype.unique=function(){for(var e=[],t=0,r=this.length;t<r;t++)e.indexOf(this[t])===-1&&e.push(this[t]);return e});var e={},t={"==":function(e,t){return e==t},"===":function(e,t){return e===t},"!=":function(e,t){return e!=t},"!==":function(e,t){return e!==t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"<":function(e,t,r){return void 0===r?e<t:e<t&&t<r},"<=":function(e,t,r){return void 0===r?e<=t:e<=t&&t<=r},"!!":function(t){return e.truthy(t)},"!":function(t){return!e.truthy(t)},"%":function(e,t){return e%t},log:function(e){return console.log(e),e},in:function(e,t){return"undefined"!=typeof t.indexOf&&t.indexOf(e)!==-1},cat:function(){return Array.prototype.join.call(arguments,"")},"+":function(){return Array.prototype.reduce.call(arguments,function(e,t){return parseFloat(e,10)+parseFloat(t,10)},0)},"*":function(){return Array.prototype.reduce.call(arguments,function(e,t){return parseFloat(e,10)*parseFloat(t,10)})},"-":function(e,t){return void 0===t?-e:e-t},"/":function(e,t){return void 0===t?e:e/t},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,function(e,t){return e.concat(t)},[])},var:function(e,t){for(var r=void 0===t?null:t,n=String(e).split("."),o=this,a=0;a<n.length;a++)if(o=o[n[a]],void 0===o)return r;return o},missing:function(){for(var t=[],r=Array.isArray(arguments[0])?arguments[0]:arguments,n=0;n<r.length;n++){var o=r[n],a=e.apply({var:o},this);null!==a&&""!==a||t.push(o)}return t},missing_some:function(t,r){var n=e.apply({missing:r},this);return r.length-n.length>=t?[]:n},method:function(e,t,r){return e[t].apply(e,r)}};return e.is_logic=function(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)},e.truthy=function(e){return!(Array.isArray(e)&&0===e.length||!e)},e.apply=function(r,n){if(Array.isArray(r))return r.map(function(t){return e.apply(t,n)});if(!e.is_logic(r))return r;n=n||{};var o,a,i=Object.keys(r)[0],l=r[i];if(Array.isArray(l)||(l=[l]),"if"===i||"?:"==i){for(o=0;o<l.length-1;o+=2)if(e.truthy(e.apply(l[o],n)))return e.apply(l[o+1],n);return l.length===o+1?e.apply(l[o],n):null}if("and"===i){for(o=0;o<l.length;o+=1)if(a=e.apply(l[o],n),!e.truthy(a))return a;return a}if("or"===i){for(o=0;o<l.length;o+=1)if(a=e.apply(l[o],n),e.truthy(a))return a;return a}if(l=l.map(function(t){return e.apply(t,n)}),"function"==typeof t[i])return t[i].apply(n,l);if(i.indexOf(".")>0){var u=String(i).split("."),s=t;for(o=0;o<u.length;o++)if(s=s[u[o]],void 0===s)throw new Error("Unrecognized operation "+i+" (failed at "+u.slice(0,o+1).join(".")+")");return s.apply(n,l)}throw new Error("Unrecognized operation "+i)},e.uses_data=function(t){var r=[];if(e.is_logic(t)){var n=Object.keys(t)[0],o=t[n];Array.isArray(o)||(o=[o]),"var"===n?r.push(o[0]):o.map(function(t){r.push.apply(r,e.uses_data(t))})}return r.unique()},e.add_operation=function(e,r){t[e]=r},e})}])},193:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(53),a=n(o),i=r(456),l=n(i),u=r(378),s=n(u),f=r(194),c=n(f),p=function(){return a.default.createElement("div",{className:s.default.App},a.default.createElement(l.default,{href:"//github.com/altayaydemir/react-json-logic",target:"_blank",position:"right",color:"black"},"Fork me on GitHub"),a.default.createElement("div",{className:s.default.Header},a.default.createElement("img",{className:s.default.ReactLogo,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png",alt:"react"}),a.default.createElement("img",{className:s.default.Baby,src:"https://media.giphy.com/media/5X7GDf7zc1Ebu/giphy.gif",alt:"baby"}),a.default.createElement("img",{className:s.default.JsonLogicLogo,src:"http://jsonlogic.com/images/jsonlogic-white.png",alt:"jsonlogic"})),a.default.createElement("div",{className:s.default.Content},a.default.createElement(c.default,{title:"No Initial Value"}),a.default.createElement(c.default,{title:"With Initial Value",value:JSON.parse('{"==":[{"and":[{"==":["1","1"]},{"===":["0","0"]}]},"1"]}')}),a.default.createElement(c.default,{title:"With Accessor",value:JSON.parse('{"==":["1",{"var":["b.a"]}]}'),data:{b:{a:1}}})))};t.default=p},194:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(53),s=n(u),f=r(192),c=n(f),p=r(379),d=n(p),b=u.PropTypes.string,h=u.PropTypes.object,y=u.PropTypes.oneOfType,g={title:b,value:y([h,b]),data:h},m={value:{},data:{}},v=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onFieldValueChange=function(e){return r.setState({value:e})},r.onAccessorDataChange=function(e){return r.setState({data:e})},r.onEvaluate=function(){return r.setState({result:(0,f.applyLogic)(r.state.value,JSON.parse(r.state.data))})},r.state={value:e.value,data:JSON.stringify(e.data),result:"Not Evaluated"},r}return i(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props.title,r=this.state,n=r.value,o=r.data,a=r.result;return s.default.createElement("div",{className:d.default.Wrapper},s.default.createElement("h3",null,t),s.default.createElement(c.default,{value:n,onChange:this.onFieldValueChange}),s.default.createElement("hr",null),s.default.createElement("h4",null,"Built Logic"),s.default.createElement("code",null,JSON.stringify(n)),s.default.createElement("hr",null),s.default.createElement("h4",null,"Data for Accessor Fields ",s.default.createElement("small",null,"(Must be JSON)")),s.default.createElement("textarea",{value:o,onChange:function(t){return e.onAccessorDataChange(t.target.value)}}),s.default.createElement("hr",null),s.default.createElement("button",{disabled:0===Object.keys(n).length,onClick:function(){return e.onEvaluate()}},"Evaluate"),s.default.createElement("hr",null),s.default.createElement("b",null,"Result:")," ",JSON.stringify(a))}}]),t}(u.Component);v.propTypes=g,v.defaultProps=m,t.default=v},195:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(53),a=n(o),i=r(166),l=r(458),u=r(193),s=n(u);(0,i.render)(a.default.createElement(l.AppContainer,null,a.default.createElement(s.default,null)),document.getElementById("app"))},378:function(e,t){e.exports={App:"App__App",Header:"App__Header",ReactLogo:"App__ReactLogo",JsonLogicLogo:"App__JsonLogicLogo",Baby:"App__Baby",Content:"App__Content"}},379:function(e,t){e.exports={Wrapper:"Demo__Wrapper"}},456:function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(53),l=n(i),u=r(10),s=n(u),f=r(457);t.default=e.GitHubForkRibbon=l.default.createClass({displayName:"GitHubForkRibbon",_setPositionStyle:function(){switch(this.ribbonStyle=(0,s.default)({},f.GitHubForkRibbon.baseStyle),this.wrapperStyle=(0,s.default)({},f.GitHubForkRibbonWrapper.baseStyle),this.ribbonPosition="",this.props.position){case"left":(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.leftStyle),(0,s.default)(this.wrapperStyle,f.GitHubForkRibbonWrapper.leftStyle),this.ribbonPosition="left";break;case"right":(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.rightStyle),(0,s.default)(this.wrapperStyle,f.GitHubForkRibbonWrapper.rightStyle),this.ribbonPosition="right";break;case"left-bottom":(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.leftBottomStyle),(0,s.default)(this.wrapperStyle,f.GitHubForkRibbonWrapper.leftBottomStyle),this.ribbonPosition="left-bottom";break;case"right-bottom":(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.rightBottomStyle),(0,s.default)(this.wrapperStyle,f.GitHubForkRibbonWrapper.rightBottomStyle),this.ribbonPosition="right-bottom";break;default:(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.rightStyle),(0,s.default)(this.wrapperStyle,f.GitHubForkRibbonWrapper.rightStyle),this.ribbonPosition="right"}},_setColorStyle:function(){switch(this.props.color){case"red":(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.redColor);break;case"orange":(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.orangeColor);break;case"black":(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.blackColor);break;case"green":(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.greenColor);break;default:(0,s.default)(this.ribbonStyle,f.GitHubForkRibbon.redColor)}},render:function(){var e=this.props,t=(e.position,e.href),r=e.target,n=(e.color,o(e,["position","href","target","color"]));return this._setPositionStyle(),this._setColorStyle(),l.default.createElement("div",a({},n,{className:"github-fork-ribbon-wrapper "+this.ribbonPosition,style:this.wrapperStyle}),l.default.createElement("div",{className:"github-fork-ribbon",style:this.ribbonStyle},l.default.createElement("a",{href:t,target:r,style:f.GitHubForkRibbon.urlStyle},this.props.children)))}})}).call(t,function(){return this}())},457:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GitHubForkRibbon={baseStyle:{position:"absolute",padding:"2px 0",backgroundColor:"#a00",backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))",WebkitBoxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",MozBoxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",boxShadow:"0 2px 3px 0 rgba(0, 0, 0, 0.5)",font:'700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',zIndex:"9999",pointerEvents:"auto"},urlStyle:{color:"#fff",textDecoration:"none",textShadow:"0 -1px rgba(0, 0, 0, 0.5)",textAlign:"center",width:"200px",lineHeight:"20px",display:"inline-block",padding:"2px 0",borderWidth:"1px 0",borderStyle:"dotted",borderColor:"rgba(255, 255, 255, 0.7)"},redColor:{backgroundColor:"#a00"},orangeColor:{backgroundColor:"#f80"},blackColor:{backgroundColor:"#333"},greenColor:{backgroundColor:"#090"},leftStyle:{top:"42px",left:"-43px",WebkitTransform:"rotate(-45deg)",MozTransform:"rotate(-45deg)",msTransform:"rotate(-45deg)",OTransform:"rotate(-45deg)",transform:"rotate(-45deg)"},rightStyle:{top:"42px",right:"-43px",WebkitTransform:"rotate(45deg)",MozTransform:"rotate(45deg)",msTransform:"rotate(45deg)",OTransform:"rotate(45deg)",transform:"rotate(45deg)"},leftBottomStyle:{top:"80px",left:"-43px",WebkitTransform:"rotate(45deg)",MozTransform:"rotate(45deg)",msTransform:"rotate(45deg)",OTransform:"rotate(45deg)",transform:"rotate(45deg)"},rightBottomStyle:{top:"80px",right:"-43px",WebkitTransform:"rotate(-45deg)",MozTransform:"rotate(-45deg)",msTransform:"rotate(-45deg)",OTransform:"rotate(-45deg)",transform:"rotate(-45deg)"}},t.GitHubForkRibbonWrapper={baseStyle:{width:"150px",height:"150px",position:"absolute",overflow:"hidden",top:0,zIndex:"9999",pointerEvents:"none"},fixedStyle:{position:"fixed"},leftStyle:{left:0},rightStyle:{right:0},leftBottomStyle:{position:"fixed",top:"inherit",bottom:0,left:0},rightBottomStyle:{position:"fixed",top:"inherit",bottom:0,right:0}}},458:function(e,t,r){e.exports=r(461)},459:function(e,t,r){"use strict";e.exports=r(460)},460:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(53),u=l.Component,s=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return this.props.component?l.createElement(this.props.component,this.props.props):l.Children.only(this.props.children)}}]),t}(u);e.exports=s},461:function(e,t,r){"use strict";var n=r(459);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=n}});
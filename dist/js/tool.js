(()=>{var t={17:(t,s,e)=>{"use strict";e.d(s,{Z:()=>c});function n(t,s,e,n,i,a,o,r){var c,l="function"==typeof t?t.options:t;if(s&&(l.render=s,l.staticRenderFns=e,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=r?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var p=l.render;l.render=function(t,s){return c.call(s),p(t,s)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}const i=n({},(function(t,s){var e=s._c;return e("div",{staticClass:"flex border-b border-40",class:s.data.staticClass},[e("div",{staticClass:"w-1/4 py-4"},[e("h4",{staticClass:"font-normal text-80"},[s._v("\n      "+s._s(s.props.label)+"\n    ")])]),s._v(" "),e("div",{staticClass:"w-3/4 py-4"},[e("p",{staticClass:"text-90"},[s._t("default")],2)])])}),[],!0,null,null,null).exports;const a=n({name:"DatabaseDetails",components:{DisplayRow:i},props:{loading:{type:Boolean,default:!0},showManageButton:{type:Boolean,default:!0},subscription:{type:Object,default:null}}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("loading-view",{staticClass:"w-full",attrs:{loading:t.loading}},[t.subscription?t._e():e("display-row",{staticClass:"text-70",attrs:{label:"Status"}},[t._v("\n    There is no subscription available.\n  ")]),t._v(" "),t.subscription?e("display-row",{attrs:{label:"Plan"}},[t._v("\n    "+t._s(t.subscription.plan)+"\n  ")]):t._e(),t._v(" "),t.subscription?e("display-row",{attrs:{label:"Subscribed since"}},[t._v("\n    "+t._s(t.subscription.created_at)+"\n  ")]):t._e(),t._v(" "),t.subscription?e("display-row",{staticClass:"remove-bottom-border",attrs:{label:"Status"}},[t.subscription.on_grace_period?e("span",[t._v("\n      On Grace Period\n    ")]):t._e(),t._v(" "),t.subscription.cancelled||t.subscription.ends_at?e("span",{staticClass:"text-danger"},[t._v("\n      Cancelled\n    ")]):t._e(),t._v(" "),!t.subscription.active||t.subscription.cancelled||t.subscription.ends_at?t._e():e("span",[t._v("\n      Active\n    ")])]):t._e()],1)}),[],!1,null,null,null).exports;var o=n({name:"InvoicesTable",props:{invoices:{type:Array,default:function(){return[]}}},data:function(){return{columns:[{label:"Charge ID"},{label:"Amount"},{label:"From"},{label:"To"},{label:"Actions"}]}}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mt-8 relative"},[t._m(0),t._v(" "),e("div",{staticClass:"overflow-hidden overflow-x-auto relative"},[e("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[e("thead",[e("tr",t._l(t.columns,(function(s){return e("th",{key:s.label,staticClass:"text-left"},[e("span",{staticClass:"cursor-pointer inline-flex items-center"},[t._v("\n              "+t._s(s.label)+"\n            ")])])})),0)]),t._v(" "),e("tbody",t._l(t.invoices,(function(s){return e("tr",{key:s.id},[e("td",[e("span",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n              "+t._s(s.charge_id||"-")+"\n            ")])]),t._v(" "),e("td",[e("span",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n              "+t._s(s.total/100)+" "+t._s(s.currency)+"\n            ")])]),t._v(" "),e("td",[e("span",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n              "+t._s(s.period_start)+"\n            ")])]),t._v(" "),e("td",[e("span",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n              "+t._s(s.period_end)+"\n            ")])]),t._v(" "),e("td",{staticClass:"text-right"},[s.link?e("a",{staticClass:"btn btn-outline text-sm",attrs:{href:s.link,target:"_blank"}},[t._v("\n              View\n            ")]):t._e()])])})),0)])])])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"py-3 flex items-center border-b border-50"},[e("div",{staticClass:"px-3"},[t._v("\n      Invoices\n    ")])])}],!1,null,"65109067",null);var r=n({name:"StripeDetails",components:{DisplayRow:i,InvoicesTable:o.exports},props:{loading:{type:Boolean,default:!0},subscription:{type:Object,default:null},invoices:{type:Array,default:function(){return[]}},plans:{type:Array,default:function(){return[]}}},data:function(){return{newPlan:""}}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("loading-view",{staticClass:"w-full",attrs:{loading:t.loading}},[t.subscription?t._e():e("div",{staticClass:"flex py-8"},[e("button",{staticClass:"mx-auto btn btn-default bg-30 border-30 font-normal hover:bg-40",on:{click:function(s){return t.$emit("manage-clicked")}}},[t._v("\n      Manage Stripe subscription\n    ")])]),t._v(" "),!t.loading&&t.subscription?e("div",[e("heading",{staticClass:"mt-8 mb-4"},[t._v("\n      Stripe subscription management\n    ")]),t._v(" "),t.subscription?e("display-row",{attrs:{label:"Created"}},[t._v("\n      "+t._s(t.subscription.created_at)+"\n    ")]):t._e(),t._v(" "),t.subscription?e("display-row",{attrs:{label:"Plan"}},[t._v("\n      "+t._s(t.subscription.stripe_plan)+"\n    ")]):t._e(),t._v(" "),t.subscription?e("display-row",{attrs:{label:"Amount"}},[t._v("\n      "+t._s(t.subscription.plan_amount/100)+" ("+t._s(t.subscription.plan_currency)+") /\n      "+t._s(t.subscription.plan_interval)+"\n    ")]):t._e(),t._v(" "),t.subscription?e("display-row",{attrs:{label:"Billing period"}},[t._v("\n      "+t._s(t.subscription.current_period_start)+" => "+t._s(t.subscription.current_period_end)+"\n    ")]):t._e(),t._v(" "),t.subscription?e("display-row",{attrs:{label:"Status"}},[t.subscription.on_grace_period?e("span",[t._v("On Grace Period")]):t._e(),t._v(" "),t.subscription.cancelled||t.subscription.cancel_at_period_end?e("span",{staticClass:"text-danger"},[t._v("Cancelled")]):t._e(),t._v(" "),!t.subscription.active||t.subscription.cancelled||t.subscription.cancel_at_period_end?t._e():e("span",[t._v("Active")]),t._v(" "),t.subscription.active&&t.subscription.cancel_at_period_end?e("button",{staticClass:"btn btn-sm btn-outline ml-4",on:{click:function(s){return t.$emit("resume-subscription")}}},[t._v("\n        Resume\n      ")]):t._e()]):t._e()],1):t._e(),t._v(" "),t.invoices.length?e("invoices-table",{attrs:{invoices:t.invoices}}):t._e()],1)}),[],!1,null,null,null);const c=n({components:{DatabaseDetails:a,StripeDetails:r.exports},props:{resourceName:{type:String,default:""},resourceId:{type:[String,Number],default:""},panel:{type:Object,default:function(){return{}}}},data:function(){return{baseEndpoint:"/nova-vendor/nova-cashier-overview/",loading:{database:!0,stripe:!1},databaseSubscription:null,stripeSubscription:null,invoices:[],plans:[]}},computed:{subscriptionName:function(){return this.panel.fields[0].subscription||"default"}},mounted:function(){this.fetchDatabaseSubscription()},methods:{fetchDatabaseSubscription:function(){var t=this;Nova.request().get("".concat(this.baseEndpoint,"billable/").concat(this.resourceId,"/?subscription=").concat(this.subscriptionName)).then((function(s){t.databaseSubscription=s.data.subscription,t.loading.database=!1}))},fetchStripeSubscription:function(){var t=this;this.loading.stripe=!0,Nova.request().get("".concat(this.baseEndpoint,"subscriptions/").concat(this.databaseSubscription.id)).then((function(s){t.stripeSubscription=s.data.subscription,t.invoices=s.data.invoices,t.plans=s.data.plans,t.loading.stripe=!1}))},updatePlan:function(t){var s=this;this.loading.stripe=!0,Nova.request().put("".concat(this.baseEndpoint,"subscriptions/").concat(this.databaseSubscription.id),{plan:t}).then((function(){s.$toasted.show("Updated successfully!",{type:"success"}),s.fetchStripeSubscription()})).catch((function(t){s.$toasted.show(t.response.data.message,{type:"error"})}))},resumeSubscription:function(){var t=this;this.loading.stripe=!0,this.loading.database=!0,Nova.request().post("".concat(this.baseEndpoint,"subscriptions/").concat(this.databaseSubscription.id,"/resume")).then((function(){t.$toasted.show("Resumed successfully!",{type:"success"}),t.fetchDatabaseSubscription(),t.fetchStripeSubscription()})).catch((function(s){t.$toasted.show(s.response.data.message,{type:"error"})}))},cancelSubscription:function(){var t=this;this.loading.stripe=!0,this.loading.database=!0,Nova.request().post("".concat(this.baseEndpoint,"subscriptions/").concat(this.databaseSubscription.id,"/cancel")).then((function(){t.$toasted.show("Cancelled successfully!",{type:"success"}),t.fetchDatabaseSubscription(),t.fetchStripeSubscription()})).catch((function(s){t.$toasted.show(s.response.data.message,{type:"error"})}))}}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h1",{staticClass:"mb-3 text-90 font-normal text-2xl"},[t._v("\n    Subscription "),e("span",{staticClass:"font-light text-70"},[t._v("("+t._s(t.subscriptionName)+")")])]),t._v(" "),e("card",{staticClass:"mb-6 py-3 px-6 flex flex-col"},[e("database-details",{attrs:{subscription:t.databaseSubscription,loading:t.loading.database}}),t._v(" "),t.databaseSubscription?e("stripe-details",{attrs:{subscription:t.stripeSubscription,invoices:t.invoices,plans:t.plans,loading:t.loading.stripe},on:{"manage-clicked":t.fetchStripeSubscription,"update-plan":t.updatePlan,"cancel-subscription":t.cancelSubscription,"resume-subscription":t.resumeSubscription}}):t._e()],1)],1)}),[],!1,null,null,null).exports}},s={};function e(n){var i=s[n];if(void 0!==i)return i.exports;var a=s[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.d=(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),Nova.booting((function(t){t.component("subscription",e(17).Z)}))})();
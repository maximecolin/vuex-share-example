import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { counter: 0 },
  mutations: {
    ['ADD'](state, value) {
      state.counter++
    }
  }
})

new Vue({
  el: '#app1',
  store,
  methods: {
    add() {
      this.$store.commit('ADD')
    }
  }
})

new Vue({
  el: '#app2',
  store,
  computed: {
    counter() {
    	return this.$store.state.counter
    }
  }
})

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.nc7-apm1q {
  cx: 11.373px;
  cy: 18.923px;
  r: 0.75px;
  fill: currentColor;
}

.o_ospcb8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.696 19.075v8.57c0 .796.645 1.44 1.44 1.44h.433m-1.873-7.633h1.873m-15.069 0h1.873v7.633m8.561.001v-4.754a2.88 2.88 0 0 0-2.88-2.88h0a2.88 2.88 0 0 0-2.881 2.88v4.753m-.001-4.753v-2.88m18.297 6.18a2.88 2.88 0 0 1-2.503 1.453h0a2.88 2.88 0 0 1-2.881-2.88v-1.873a2.88 2.88 0 0 1 2.88-2.88h0a2.88 2.88 0 0 1 2.881 2.88v.936h-5.761");
}

.oe1fbhbdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.62 24.332a2.88 2.88 0 0 1 2.88-2.88h0m-2.881 0v7.633");
}
</style><path class="i9clfwm2k"/><path class="oe1fbhbdw"/><circle class="nc7-apm1q"/><path class="o_ospcb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:inter"} {...others} />);
}

export default Component;

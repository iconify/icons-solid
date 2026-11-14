import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-e6e76co {
  d: path("M7 19v-8.5h10V19m-6.75-8.5V19m3.5-8.5V19");
}

.jtchsjxso {
  d: path("M4 4.5h16A1.5 1.5 0 0 1 21.5 6A1.5 1.5 0 0 1 20 7.5H4A1.5 1.5 0 0 1 2.5 6A1.5 1.5 0 0 1 4 4.5m0 3V19h16V7.5");
}
</style><g class="hntgybcog"><path class="jtchsjxso"/><path class="i-e6e76co"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:convention-center"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aa2x8_bum {
  d: path("M3.5 3.5v17h17M8 8v9m4-11v9m4-5v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vg3d3ebqj {
  d: path("M8 10za1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8 14a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 8 10m4-2za1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 12 12a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 12 8m4 4za1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 16 16a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 16 12");
}
</style><g class="hntgybcog"><path class="aa2x8_bum"/><path class="vg3d3ebqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:forex-chart"} {...others} />);
}

export default Component;

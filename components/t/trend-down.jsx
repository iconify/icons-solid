import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chmcbdc0x {
  d: path("m3 6l5 5.5l4-3l8.5 8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sthqgdbph {
  d: path("M15.5 17h5v-5");
}
</style><g class="hntgybcog"><path class="chmcbdc0x"/><path class="sthqgdbph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:trend-down"} {...others} />);
}

export default Component;

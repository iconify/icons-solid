import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cj_8r9bgf {
  d: path("M3.75 17c4 0 8.25-2.5 8.25-7.25a3 3 0 0 0-6 0C6 14.5 10.25 17 14.25 17H20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lz8bt9ehm {
  d: path("m16.75 13.5l3.5 3.5l-3.5 3.5");
}
</style><g class="hntgybcog"><path class="cj_8r9bgf"/><path class="lz8bt9ehm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-loop-infinity"} {...others} />);
}

export default Component;

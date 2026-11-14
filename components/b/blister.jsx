import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_87fby_x {
  d: path("M2.5 13.5H7c0-9 10-9 10 0h4.5M5 17.5h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r_avhhbyl {
  d: path("M10.5 11.5c0-1 .5-1.75 1.5-2");
}
</style><g class="hntgybcog"><path class="b_87fby_x"/><path class="r_avhhbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:blister"} {...others} />);
}

export default Component;

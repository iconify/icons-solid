import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dc_3ayb6q {
  cx: 10px;
  cy: 4.5px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oje8oguzr {
  d: path("m10 8l-1 6l2.5 3v4.25M9 14l-2.5 7.25M9.75 9.5l3.5 3.25m0 0l5.75 8.5");
}
</style><g class="hntgybcog"><circle class="dc_3ayb6q"/><path class="oje8oguzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:blind-cane"} {...others} />);
}

export default Component;

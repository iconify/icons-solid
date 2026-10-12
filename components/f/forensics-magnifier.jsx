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

.qx1_lqwqc {
  d: path("m15.75 15.75l5.5 5.5M6.5 7.75a4.5 4.5 0 0 1 7.5 0M7.75 13.5v-2.75a2.5 2.5 0 0 1 5 0v1.75m-2.5-1.75v3.75");
}

.y-fd6pbmc {
  cx: 10.25px;
  cy: 10.25px;
  r: 7.5px;
}
</style><g class="hntgybcog"><circle class="y-fd6pbmc"/><path class="qx1_lqwqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:forensics-magnifier"} {...others} />);
}

export default Component;

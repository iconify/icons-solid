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

.yyklclb8m {
  d: path("M7 20.25h10a.75.75 0 0 0 .75-.75c0-2.7-2.6-4.75-5.75-4.75S6.25 16.8 6.25 19.5a.75.75 0 0 0 .75.75M6 6.5A2.25 2.25 0 0 0 6 11m12-4.5a2.25 2.25 0 0 1 0 4.5M4.75 14.25c-1.2.4-2 1.4-2 2.65v1.6a.75.75 0 0 0 .75.75h1m14.75-5c1.2.4 2 1.4 2 2.65v1.6a.75.75 0 0 1-.75.75h-1");
}

.z2o0ujiuj {
  cx: 12px;
  cy: 7px;
  r: 3px;
}
</style><g class="hntgybcog"><circle class="z2o0ujiuj"/><path class="yyklclb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:team-building"} {...others} />);
}

export default Component;

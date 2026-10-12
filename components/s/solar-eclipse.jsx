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

.sx6ey9bmc {
  d: path("M19.99 9.09a8.5 8.5 0 1 1-5.08-5.08m3.81-1.23q.3 2.2 2.5 2.5q-2.2.3-2.5 2.5q-.3-2.2-2.5-2.5q2.2-.3 2.5-2.5");
}

.v90gbqbox {
  cx: 12px;
  cy: 12px;
  r: 6px;
}
</style><g class="hntgybcog"><circle class="v90gbqbox"/><path class="sx6ey9bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:solar-eclipse"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awd9vt-kp {
  d: path("M17.25 7h2.25m-1.125 9.75v1.5");
}

.h_vzf4bxt {
  d: path("M2.75 20.75V18.5a5 5 0 0 1 10 0v2.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jzyms8u1y {
  width: 5.75px;
  height: 12px;
  x: 15.5px;
  y: 9.25px;
  rx: 1.5px;
}

.m2rbgvbce {
  cx: 7.75px;
  cy: 7.25px;
  r: 3.25px;
}
</style><g class="hntgybcog"><circle class="m2rbgvbce"/><path class="h_vzf4bxt"/><rect class="jzyms8u1y"/><path class="awd9vt-kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fatigue"} {...others} />);
}

export default Component;

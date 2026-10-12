import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnbznz0fw {
  width: 4.5px;
  height: 16.5px;
  x: 9.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.glcvn7b3h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.25h4.5m-4.5 5h4.5m2.5-5h4.5m-4.5 5h4.5m2.5-5h4.5m-4.5 5h4.5");
}

.kgg-r098j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 17.25h.01m6.99 0h.01m6.99 0h.01");
}

.w3eclpb_u {
  width: 4.5px;
  height: 16.5px;
  x: 16.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.x-pudeasg {
  width: 4.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="x-pudeasg"/><rect class="fnbznz0fw"/><rect class="w3eclpb_u"/><path class="glcvn7b3h"/><path class="kgg-r098j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cluster-rack"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqud7pb8g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 11.25h.01m4.99 0h.01");
}

.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m8kqe4bga {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 16.75h4");
}

.qu64j14gd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.95 6h14.1");
}

.upcq33ojb {
  width: 11px;
  height: 4px;
  x: 6.5px;
  y: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="c6vt1lbds"/><path class="qu64j14gd"/><rect class="upcq33ojb"/><path class="bqud7pb8g"/><path class="m8kqe4bga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:burglar"} {...others} />);
}

export default Component;

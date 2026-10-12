import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2lavd9ry {
  cx: 9.75px;
  cy: 14.5px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uz10tpwoh {
  width: 12px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.x5trvvb9i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 6.75h.01m3.99 0h.01m-4.01 3.5h.01m3.99 0h.01");
}

.xpoa_kbgc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.75 14.75h5.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zmclkbcww {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 15.75v2.5");
}
</style><g class="y9tr6bcfx"><rect class="uz10tpwoh"/><path class="xpoa_kbgc"/><path class="x5trvvb9i"/><circle class="l2lavd9ry"/><path class="zmclkbcww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:smart-lock"} {...others} />);
}

export default Component;

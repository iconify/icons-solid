import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bttxhob3m {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h12v18.5h-12zm12 12h5.5");
}

.l2lavd9ry {
  cx: 9.75px;
  cy: 14.5px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x5trvvb9i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 6.75h.01m3.99 0h.01m-4.01 3.5h.01m3.99 0h.01");
}

.zmclkbcww {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 15.75v2.5");
}
</style><g class="ux2u0rbkq"><path class="bttxhob3m"/><path class="x5trvvb9i"/><circle class="l2lavd9ry"/><path class="zmclkbcww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:smart-lock-check-sharp"} {...others} />);
}

export default Component;

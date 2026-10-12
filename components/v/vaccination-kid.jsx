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

.i2uiz1zrg {
  d: path("M16.5 9.5h2m-2 3h2m0 3.5v4.75m0-14.25V3.25m-1.5 0h3");
}

.kwdm2lb4x {
  cx: 8.25px;
  cy: 8.5px;
  r: 2.5px;
}

.n9gf8sbmw {
  d: path("M3.25 21.25V18a5 5 0 0 1 5-5a5 5 0 0 1 5 5v3.25Z");
}

.ps15qokrc {
  width: 4px;
  height: 9.5px;
  x: 16.5px;
  y: 6.5px;
  rx: 1px;
}
</style><g class="hntgybcog"><circle class="kwdm2lb4x"/><path class="n9gf8sbmw"/><rect class="ps15qokrc"/><path class="i2uiz1zrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:vaccination-kid"} {...others} />);
}

export default Component;

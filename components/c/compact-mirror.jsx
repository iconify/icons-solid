import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fj7gnachc {
  d: path("M8.5 18.5h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ix1rbnbtt {
  cx: 12px;
  cy: 8px;
  r: 5.25px;
}

.s8gk42zzi {
  width: 14.5px;
  height: 5.75px;
  x: 4.75px;
  y: 15.5px;
  rx: 2.75px;
}

.vta5xkb6t {
  d: path("M14.75 8a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 1 1 5.5 0");
}
</style><g class="hntgybcog"><circle class="ix1rbnbtt"/><path class="vta5xkb6t"/><rect class="s8gk42zzi"/><path class="fj7gnachc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:compact-mirror"} {...others} />);
}

export default Component;

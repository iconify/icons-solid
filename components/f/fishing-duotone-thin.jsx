import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bcnd39q6l {
  d: path("m16 15 3 -3");
}

.bdn-1vyeu {
  fill: currentColor;
  d: path("M9 19c-3 0 -5 -2 -5 -4s2 -4 5 -4c4 0 6 2 7 4 -1 2 -3 4 -7 4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h6_thjblr {
  d: path("M9 8V2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jha0j9k6g {
  d: path("m16 15 3 3");
}

.w7-1r_bmu {
  d: path("M9 19c-3 0 -5 -2 -5 -4s2 -4 5 -4c4 0 6 2 7 4 -1 2 -3 4 -7 4");
}
</style><g class="hntgybcog"><path class="bdn-1vyeu"/><path class="w7-1r_bmu"/><path class="bcnd39q6l"/><path class="jha0j9k6g"/><path class="h6_thjblr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:fishing-duotone-thin"} {...others} />);
}

export default Component;

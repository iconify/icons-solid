import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lghfbwbad {
  d: path("M4 8H13");
}

.pnx-7hdbe {
  d: path("M6 13H13");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ppqxdzqbu {
  stroke-linejoin: round;
  d: path("M17 20V4L20 8");
}

.r-fwg-bgp {
  d: path("M8 18H13");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="lghfbwbad"/><path class="pnx-7hdbe"/><path class="r-fwg-bgp"/><path class="ppqxdzqbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-from-bottom-to-top-line-duotone"} {...others} />);
}

export default Component;

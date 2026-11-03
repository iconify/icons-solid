import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qabp2ib4x {
  fill: currentColor;
  d: path("M7 6C7 6.5523 6.5523 7 6 7C5.4477 7 5 6.5523 5 6C5 5.4477 5.4477 5 6 5C6.5523 5 7 5.4477 7 6Z");
  stroke: none;
}

.v5xibub1f {
  d: path("M2 20L2 2L22 2L22 20L2 20ZM2 10L22 10M5 20L5 23M19 20L19 23M6 20L6 16L8 16M10 20L10 16L8 16M8 16L8 13M14 20L14 16L16 16M18 20L18 16L16 16M16 16L16 13");
}
</style><g class="gp_8x1bzb"><path class="v5xibub1f"/><path class="qabp2ib4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:refrigerator-mini-sharp"} {...others} />);
}

export default Component;

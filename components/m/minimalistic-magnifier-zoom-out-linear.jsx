import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cq5xp9n1p {
  d: path("M9 11.5H11.5H14");
}

.hllyxzboc {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mj_6ev9oe {
  d: path("M20 20L22 22");
}
</style><g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="cq5xp9n1p"/><path class="mj_6ev9oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifier-zoom-out-linear"} {...others} />);
}

export default Component;

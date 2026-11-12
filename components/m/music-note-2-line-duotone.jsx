import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c55ag9btm {
  cx: 9px;
  cy: 18px;
  r: 4px;
}

.gtb7pwkil {
  d: path("M13 18V10V2");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.roh-o2f0v {
  d: path("M19 8C15.6863 8 13 5.31371 13 2");
}
</style><g class="ipq1z-bjh"><path class="gtb7pwkil"/><circle class="c55ag9btm"/><path class="roh-o2f0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-2-line-duotone"} {...others} />);
}

export default Component;

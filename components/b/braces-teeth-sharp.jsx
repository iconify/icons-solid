import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wbs_q4bxl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h18.5v11.5H2.75zM12 7.75V10m0 4v2.25M2.75 12h18.5");
}

.xjtjf2bvb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 12h.01m8.99 0h.01");
}
</style><g class="ux2u0rbkq"><path class="wbs_q4bxl"/><path class="xjtjf2bvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:braces-teeth-sharp"} {...others} />);
}

export default Component;

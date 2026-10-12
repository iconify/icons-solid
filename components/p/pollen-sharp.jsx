import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.asj-eub5t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.16 12.37A2.25 2.25 0 1 1 12.34 16a2.25 2.25 0 1 1-3.09 2.25A2.25 2.25 0 1 1 6.16 16a2.25 2.25 0 1 1 1.18-3.63a2.25 2.25 0 1 1 3.82 0Z");
}

.tffx2vbbs {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.5 9h.01m-.76-4.75h.01M20 5.5h.01");
}

.tyzpclblr {
  cx: 9.25px;
  cy: 15px;
  r: 1.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="asj-eub5t"/><circle class="tyzpclblr"/><path class="tffx2vbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pollen-sharp"} {...others} />);
}

export default Component;

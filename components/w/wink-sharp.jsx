import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m1nbwhb7d {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 10h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ve176vb4k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 10.25L15 9.179l1.25 1.071m-7.75 4l1.385 2h4.23l1.385-2");
}
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="m1nbwhb7d"/><path class="ve176vb4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wink-sharp"} {...others} />);
}

export default Component;

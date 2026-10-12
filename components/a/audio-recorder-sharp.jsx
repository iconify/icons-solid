import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fw6ra5b4x {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 18.5h.01m2.99 0h.01m2.99 0h.01");
}

.hyfgy206y {
  cx: 16.5px;
  cy: 4.5px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jd6yzub2r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9.25L8.4 6.1M14 9.25l1.6-3.15M5.25 9.25h13.5v12H5.25z");
}

.k58stbbya {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 11.75h8v4H8z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xrf4e9f4i {
  cx: 7.5px;
  cy: 4.5px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><circle class="xrf4e9f4i"/><circle class="hyfgy206y"/><path class="jd6yzub2r"/><path class="k58stbbya"/><path class="fw6ra5b4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:audio-recorder-sharp"} {...others} />);
}

export default Component;

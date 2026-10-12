import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i7mu3zb0e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11v1.5h3V11m3 0v1.5h3V11");
}

.mthwhpckk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 16.25h4.5");
}

.rd4ffbunp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 8.75h.01m5.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="i7mu3zb0e"/><path class="rd4ffbunp"/><path class="mthwhpckk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rolling-eyes-sharp"} {...others} />);
}

export default Component;

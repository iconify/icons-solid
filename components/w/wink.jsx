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

.o6r90jb_v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 10.25c.7-.6 1.8-.6 2.5 0m-7.75 4c.9 1.3 2.1 2 3.5 2s2.6-.7 3.5-2");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="c6vt1lbds"/><path class="m1nbwhb7d"/><path class="o6r90jb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wink"} {...others} />);
}

export default Component;

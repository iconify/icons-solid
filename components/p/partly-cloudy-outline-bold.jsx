import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fd-_w9lgw {
  d: path("M8 21a4 4 0 0 1 2 -7.5 5 5 0 0 1 9 -1 4.5 4.5 0 0 1 3 8.5Z");
}

.j330vxbun {
  d: path("M4 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.l3q0873tf {
  d: path("M13.5 2.5 11 5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ucd8o6bjf {
  d: path("M2.5 2.5 5 5");
}
</style><g class="s0phu2bbs"><path class="j330vxbun"/><path class="ucd8o6bjf"/><path class="l3q0873tf"/><path class="fd-_w9lgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:partly-cloudy-outline-bold"} {...others} />);
}

export default Component;

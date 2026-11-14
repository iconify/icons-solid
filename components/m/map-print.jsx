import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c674zoe4n {
  d: path("m7.5 10.5l3-1l3 1l3-1v7l-3 1l-3-1l-3 1Zm3-1v7m3-6v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n2e4fo1cw {
  d: path("M6.5 2.5H14L19.5 8v11.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="n2e4fo1cw"/><path class="c674zoe4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:map-print"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3aknw9wn {
  d: path("m17.011 11.197l2.75 1.618a1.5 1.5 0 0 1 .739 1.293v3.284a1.5 1.5 0 0 1-.739 1.293l-2.75 1.618a1.5 1.5 0 0 1-1.522 0l-2.75-1.618A1.5 1.5 0 0 1 12 17.392v-3.284a1.5 1.5 0 0 1 .739-1.293l2.75-1.618a1.5 1.5 0 0 1 1.522 0");
}

.otzh9hbzp {
  d: path("m12.761 3.697l2.75 1.618a1.5 1.5 0 0 1 .739 1.293v3.284a1.5 1.5 0 0 1-.739 1.293l-2.75 1.618a1.5 1.5 0 0 1-1.522 0l-2.75-1.618a1.5 1.5 0 0 1-.739-1.293V6.608a1.5 1.5 0 0 1 .739-1.293l2.75-1.618a1.5 1.5 0 0 1 1.522 0");
}

.q0yw5qbzn {
  d: path("m8.511 11.197l2.75 1.618A1.5 1.5 0 0 1 12 14.108v3.284a1.5 1.5 0 0 1-.739 1.293l-2.75 1.618a1.5 1.5 0 0 1-1.522 0l-2.75-1.618a1.5 1.5 0 0 1-.739-1.293v-3.284a1.5 1.5 0 0 1 .739-1.293l2.75-1.618a1.5 1.5 0 0 1 1.522 0");
}
</style><g class="hntgybcog"><path class="q0yw5qbzn"/><path class="l3aknw9wn"/><path class="otzh9hbzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:segmented-mirror"} {...others} />);
}

export default Component;

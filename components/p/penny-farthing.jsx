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

.ngg3_2oja {
  d: path("M6 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0m-3.5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0M14 12h.01");
}

.smlgng2al {
  d: path("M4.5 19c0-8 2.5-14 7-14.75M9.5 3h3");
}
</style><g class="hntgybcog"><path class="ngg3_2oja"/><path class="smlgng2al"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:penny-farthing"} {...others} />);
}

export default Component;

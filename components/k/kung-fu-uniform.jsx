import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a0ov50a-l {
  d: path("m9.5 5l5 5.5V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uh1n66bko {
  d: path("M8 5V2.5h8V5l4 1.5l1.5 7.5l-3 .5l-1-4V21h-11V10.5l-1 4l-3-.5L4 6.5Z");
}
</style><g class="hntgybcog"><path class="uh1n66bko"/><path class="a0ov50a-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kung-fu-uniform"} {...others} />);
}

export default Component;

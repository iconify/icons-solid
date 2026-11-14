import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8nj9l4ua {
  d: path("m13.5 19.5l-6-3.5l4-3.5l-2-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s6uliyj6q {
  d: path("M2.5 19.5L9.5 5l4.5 7.5L16.5 9l5 10.5Z");
}
</style><g class="hntgybcog"><path class="s6uliyj6q"/><path class="g8nj9l4ua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:acclimatization"} {...others} />);
}

export default Component;

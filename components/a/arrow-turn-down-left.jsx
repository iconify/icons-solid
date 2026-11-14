import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c486jtb9l {
  d: path("m3.5 15l4 4l4-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i697pwblp {
  d: path("M20.5 5h-8a5 5 0 0 0-5 5v9");
}
</style><g class="hntgybcog"><path class="i697pwblp"/><path class="c486jtb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:arrow-turn-down-left"} {...others} />);
}

export default Component;

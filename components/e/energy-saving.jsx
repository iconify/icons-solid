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

.kuc0_9bqn {
  d: path("M10 12.5c0-3.5 1.5-5 4.5-5.5c0 3-1.5 5-4.5 5.5");
}

.vbh3wac6q {
  d: path("M9 18v-3.25a6.5 6.5 0 1 1 6 0V18Zm.5 3h5");
}
</style><g class="hntgybcog"><path class="vbh3wac6q"/><path class="kuc0_9bqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:energy-saving"} {...others} />);
}

export default Component;

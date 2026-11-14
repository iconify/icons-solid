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

.lefmdjhbk {
  d: path("M6.5 4h7A3.5 3.5 0 0 1 17 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 3 16.5v-9A3.5 3.5 0 0 1 6.5 4");
}

.xkjz5leqf {
  d: path("M6 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m11-3h4.5M17 14h4.5M10 12h.01");
}
</style><g class="hntgybcog"><path class="lefmdjhbk"/><path class="xkjz5leqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hvac-unit"} {...others} />);
}

export default Component;

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

.j7qjn6psg {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}

.mrxjvii7w {
  d: path("M9.25 17V7h3a2.5 2.5 0 0 1 0 5h-3m3 0h.5a2.5 2.5 0 0 1 0 5h-3.5");
}
</style><g class="hntgybcog"><path class="j7qjn6psg"/><path class="mrxjvii7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bulb-mode"} {...others} />);
}

export default Component;

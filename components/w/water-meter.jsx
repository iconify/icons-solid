import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.by5eqwboc {
  d: path("M10 6h4a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 14 9h-4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 10 6m.75 0v3m2.5-3v3M12 12s-2.25 2.5-2.25 3.75a2.25 2.25 0 0 0 4.5 0C14.25 14.5 12 12 12 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="by5eqwboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-meter"} {...others} />);
}

export default Component;

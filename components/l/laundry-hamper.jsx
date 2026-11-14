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

.orwd-jzrd {
  d: path("M4.5 10h15L18 19.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5Zm15 0L7 4m6.25 3l-1-2");
}

.worjjwb5n {
  d: path("M7 10v4a1.5 1.5 0 0 0 3 0v-4m2.75 3v4m2.75-4v4");
}
</style><g class="hntgybcog"><path class="orwd-jzrd"/><path class="worjjwb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:laundry-hamper"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bnutvgb7t {
  d: path("M18 21.5V9A5 5 0 0 0 8 9v9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.offgktbzi {
  d: path("M4.5 15L8 18.5l3.5-3.5");
}
</style><g class="hntgybcog"><path class="bnutvgb7t"/><path class="offgktbzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lane-arrow-u-turn"} {...others} />);
}

export default Component;

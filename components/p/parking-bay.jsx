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

.ss1knmssx {
  d: path("M9 7h3a3 3 0 0 1 0 6H9");
}

.yxj9b3b3t {
  d: path("M3.5 3v18h17V3M9 17.5V7");
}
</style><g class="hntgybcog"><path class="yxj9b3b3t"/><path class="ss1knmssx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:parking-bay"} {...others} />);
}

export default Component;

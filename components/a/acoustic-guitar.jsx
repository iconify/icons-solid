import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwtzbac5v {
  d: path("M8 12a3.25 3.25 0 1 1 4 4a4.5 4.5 0 1 1-4-4m5.5-1.5l3.75-3.75m2.914-2.914za1.5 1.5 0 0 1 0 2.121l-.707.707a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.th8ugqbdn {
  d: path("M6 16.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="fwtzbac5v"/><path class="th8ugqbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:acoustic-guitar"} {...others} />);
}

export default Component;

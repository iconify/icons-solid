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

.vacenfbma {
  d: path("M7.75 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.wks5ymklo {
  d: path("M5.25 21.5v-5a4 4 0 0 1 4-4h9.5v-9m-3.5 12v6");
}
</style><g class="hntgybcog"><path class="vacenfbma"/><path class="wks5ymklo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:referee-signal"} {...others} />);
}

export default Component;

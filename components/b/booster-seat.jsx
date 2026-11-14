import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dw8ewghny {
  d: path("M11.75 11h6A2.25 2.25 0 0 1 20 13.25a2.25 2.25 0 0 1-2.25 2.25h-6a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 11.75 11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.waa6aib-v {
  d: path("M7 3a2.5 2.5 0 0 0-2.5 2.5V19A1.5 1.5 0 0 0 6 20.5h12.5A1.5 1.5 0 0 0 20 19v-2a1.5 1.5 0 0 0-1.5-1.5h-9v-10A2.5 2.5 0 0 0 7 3");
}
</style><g class="hntgybcog"><path class="waa6aib-v"/><path class="dw8ewghny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:booster-seat"} {...others} />);
}

export default Component;

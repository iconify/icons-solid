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

.idefjyq-l {
  d: path("M5.5 7h13a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 14.5v-4A3.5 3.5 0 0 1 5.5 7");
}

.rnrqvuikb {
  d: path("M4.75 15v-3.5h.75v-.75H7v.75h.75V15Zm5.75 0v-3.5h.75v-.75h1.5v.75h.75V15Zm5.75 0v-3.5H17v-.75h1.5v.75h.75V15Z");
}
</style><g class="hntgybcog"><path class="idefjyq-l"/><path class="rnrqvuikb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:network-switch"} {...others} />);
}

export default Component;

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

.nth7w3b3o {
  d: path("M21.5 11.5h-4a2 2 0 0 0 0 4h4");
}

.ppczfh7wg {
  d: path("M6.875 8h10.25a4.375 4.375 0 0 1 4.375 4.375v4.25A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-4.25A4.375 4.375 0 0 1 6.875 8M5.5 8L7 3l12 2l-.75 3");
}
</style><g class="hntgybcog"><path class="ppczfh7wg"/><path class="nth7w3b3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:benefits-payment"} {...others} />);
}

export default Component;

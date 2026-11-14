import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.arbtnbcve {
  d: path("M4.25 14L6 15.25l1.75-1.5l1.75 1.5L11.25 14");
}

.cwtxecb9j {
  d: path("M5 2.5h14l1.5 19h-6.75L12 9.5l-1.75 12H3.5ZM5 6h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cwtxecb9j"/><path class="arbtnbcve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:distressed-jeans"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fp6mc5evj {
  d: path("M5 16.5L7 14h7.5m4.5 2.5l-1.75-4.75m-2.5-2l-10.25-2M14.75 10a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M4.5 5.5V10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.so_yimlmf {
  d: path("M2.5 16.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m14 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="so_yimlmf"/><path class="fp6mc5evj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:folding-scooter"} {...others} />);
}

export default Component;

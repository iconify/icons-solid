import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-rm_pirn {
  d: path("M4.5 11h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2L8 2.5h6.5L17 6h2.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H16m-7.5 0H12");
}

.ahtieibum {
  d: path("M4.5 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3 5.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a-rm_pirn"/><path class="ahtieibum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:car-courtesy"} {...others} />);
}

export default Component;

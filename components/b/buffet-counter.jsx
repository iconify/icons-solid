import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c35h1uftk {
  d: path("M5 14h14a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 19H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 14m-.5 0a7.5 10.5 0 0 1 15 0");
}

.d07s-te_v {
  d: path("M7.5 11.25h3.25L10 14H8.25Zm5.75 0h3.25L15.75 14H14Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c35h1uftk"/><path class="d07s-te_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:buffet-counter"} {...others} />);
}

export default Component;

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

.s-n66sb6w {
  d: path("M4 6v7m0-3.5h2.5m0 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.zlbp31b1n {
  d: path("M19.5 9.5V21H13v-5m-2.25-6.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="s-n66sb6w"/><path class="zlbp31b1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:toilet-paper-holder"} {...others} />);
}

export default Component;

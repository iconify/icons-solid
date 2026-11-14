import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fl9u_jbto {
  d: path("M7.75 6.75a1.75 4 0 1 0 3.5 0a1.75 4 0 1 0-3.5 0m5 0a1.75 4 0 1 0 3.5 0a1.75 4 0 1 0-3.5 0M10 14.5h.01m3.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i5gy7caza {
  d: path("M6.5 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="i5gy7caza"/><path class="fl9u_jbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cruelty-free"} {...others} />);
}

export default Component;

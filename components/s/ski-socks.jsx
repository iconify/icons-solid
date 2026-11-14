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

.j54l-_liv {
  d: path("M6 2.5h7v10l5 3.5a3.25 3.25 0 0 1-3.5 5l-7-4.25A3.5 3.5 0 0 1 6 14Zm0 4h7");
}

.jadrmr06b {
  d: path("M6 11q4 1 4 7.25");
}
</style><g class="hntgybcog"><path class="j54l-_liv"/><path class="jadrmr06b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ski-socks"} {...others} />);
}

export default Component;

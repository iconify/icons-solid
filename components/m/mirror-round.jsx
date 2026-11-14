import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ha9xtnb5j {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.koea7bc5n {
  d: path("m7.25 6.5l4.75-4l4.75 4M7 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0m3.5 0l2-2");
}
</style><g class="hntgybcog"><path class="ha9xtnb5j"/><path class="koea7bc5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mirror-round"} {...others} />);
}

export default Component;

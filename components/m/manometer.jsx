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

.kxr_cubdx {
  d: path("M4.5 3v10.5a7.5 7.5 0 0 0 15 0V3");
}

.po0yzv23k {
  d: path("M8 3v10.5a4 4 0 0 0 8 0V3M4.5 12H8m8-5.5h3.5M10.75 5h2.5M11.5 8.25h1.75m-2.5 3.25h2.5");
}
</style><g class="hntgybcog"><path class="kxr_cubdx"/><path class="po0yzv23k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:manometer"} {...others} />);
}

export default Component;

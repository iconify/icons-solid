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

.kwd6tdbsf {
  d: path("M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5Z");
}

.u8054pfip {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v9");
}
</style><g class="hntgybcog"><path class="kwd6tdbsf"/><path class="u8054pfip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:product-3d"} {...others} />);
}

export default Component;

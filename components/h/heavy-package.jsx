import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h568d0b_f {
  d: path("m3.5 7l8.5 4.5L20.5 7M12 11.5v10m6-7v7m-3-3l3 3l3-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oj1qypboh {
  d: path("M13.357 20.782L12 21.5L3.5 17V7L12 2.5L20.5 7v6.282");
}
</style><g class="hntgybcog"><path class="oj1qypboh"/><path class="h568d0b_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:heavy-package"} {...others} />);
}

export default Component;

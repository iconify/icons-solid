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

.tz5ne2s-t {
  d: path("M19.361 8.5A8.5 8.5 0 1 1 12 4.25");
}

.vkp32f-gc {
  d: path("m10 2.25l2 2l-2 2m-2 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0h.01");
}
</style><g class="hntgybcog"><path class="tz5ne2s-t"/><path class="vkp32f-gc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:centrifugation"} {...others} />);
}

export default Component;

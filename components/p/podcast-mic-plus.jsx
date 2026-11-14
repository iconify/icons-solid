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

.qq1sl8bzq {
  d: path("M9.5 2.5za3 3 0 0 1 3 3V10a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3");
}

.r__xj9yjg {
  d: path("M3.75 10a5.75 5.75 0 0 0 11.5 0M9.5 15.75v5.75m-3.5 0h7m5-6.5v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="qq1sl8bzq"/><path class="r__xj9yjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:podcast-mic-plus"} {...others} />);
}

export default Component;

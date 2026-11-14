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

.mxsqcubiu {
  d: path("M8.25 16.995a7.5 7.5 0 1 1 7.5 0M8 10.5h8");
}

.w0wsd-bkd {
  d: path("M8 10.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 4v6m-3.5 0h7");
}
</style><g class="hntgybcog"><path class="w0wsd-bkd"/><path class="mxsqcubiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ambisonic-mic"} {...others} />);
}

export default Component;

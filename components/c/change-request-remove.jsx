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

.qyi7-c6de {
  d: path("M18 20.829v.671H4v-19h9l5 5v7.729");
}

.u6wy7cjtk {
  d: path("M13 2.5v5h5M7.5 11h7m-7 4H11m4 3h6");
}
</style><g class="hntgybcog"><path class="qyi7-c6de"/><path class="u6wy7cjtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:change-request-remove"} {...others} />);
}

export default Component;

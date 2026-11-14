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

.ijm8161nx {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.ovv0shrzd {
  d: path("M14.907 4.013a8.5 8.5 0 0 1 5.08 5.08m0 5.814a8.5 8.5 0 0 1-5.08 5.08m-5.814 0a8.5 8.5 0 0 1-5.08-5.08m0-5.814a8.5 8.5 0 0 1 5.08-5.08");
}
</style><g class="hntgybcog"><path class="ovv0shrzd"/><path class="ijm8161nx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:singleton"} {...others} />);
}

export default Component;

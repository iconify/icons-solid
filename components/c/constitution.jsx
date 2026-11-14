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

.u7rd14ldy {
  d: path("M10 17.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.zxblkv2yz {
  d: path("M7 6.5h-.5a2 2 0 0 1 0-4h11a2 2 0 0 1 0 4H17V19a2.5 2.5 0 0 1-2.5 2.5h-8a2 2 0 0 1 0-4H7Zm2.5 3h5m-5 3h3");
}
</style><g class="hntgybcog"><path class="zxblkv2yz"/><path class="u7rd14ldy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:constitution"} {...others} />);
}

export default Component;

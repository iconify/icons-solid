import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rbkqtrbvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7A3.5 3.5 0 0 1 19 6v9a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 15V6a3.5 3.5 0 0 1 3.5-3.5M7 18.5V21h10v-2.5m-5-16v16m-2.75-10v4m5.5-4v4");
}
</style><path class="rbkqtrbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:larder-unit"} {...others} />);
}

export default Component;

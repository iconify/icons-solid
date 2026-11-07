import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oy7qx_kvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 17H6a2 2 0 0 1-2-2V6a2 2 0 0 1 1.177-1.823M11 4h7a2 2 0 0 1 2 2v7M9 20h6M3 2l19 19");
}
</style><path class="oy7qx_kvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:monitor-off"} {...others} />);
}

export default Component;

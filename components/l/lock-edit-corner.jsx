import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tz3t3khcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 21H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M8 9V7a4 4 0 1 1 8 0v2m-2 12v-3l4-4l3 3l-4 4Z");
}
</style><path class="tz3t3khcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-edit-corner"} {...others} />);
}

export default Component;

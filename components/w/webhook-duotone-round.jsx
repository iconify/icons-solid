import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ey3ko8bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17a4 4 0 1 0 8 0h4m0 4a4 4 0 1 0 0-8a4 4 0 0 1-4-4V7m4 0a4 4 0 1 0-8 0v10");
}
</style><path class="ey3ko8bcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:webhook-duotone-round"} {...others} />);
}

export default Component;

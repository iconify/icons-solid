import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r5077nbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5C3 3.8954 3.8954 3 5 3L19 3C20.1046 3 21 3.8954 21 5L21 15C21 16.1046 20.1046 17 19 17L5 17C3.8954 17 3 16.1046 3 15L3 5ZM3 21L6 21M10.5 21L13.5 21M18 21L21 21");
}
</style><path class="r5077nbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-thumbnails"} {...others} />);
}

export default Component;

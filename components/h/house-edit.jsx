import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.npinupbyr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21H6a2 2 0 0 1-2-2v-8.092a2 2 0 0 1 .683-1.506l6-5.25a2 2 0 0 1 2.634 0l6 5.25A2 2 0 0 1 20 10.908V19a2 2 0 0 1-2 2zm-3-4v-2l4-4l2 2l-4 4Z");
}
</style><path class="npinupbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-edit"} {...others} />);
}

export default Component;

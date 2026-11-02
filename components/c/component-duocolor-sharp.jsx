import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpyj28b6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 4l2 2l-4 4l-4-4l4-4zm-6 6l2 2l-4 4l-4-4l4-4zm12 0l2 2l-4 4l-4-4l4-4zm-6 6l2 2l-4 4l-4-4l4-4z");
}
</style><path class="bpyj28b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:component-duocolor-sharp"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mae_xkbyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 19A5 5 0 0 1 7 9c2-7 11-6 11 2a4 4 0 1 1 0 8Zm2-3v-2l4-4l2 2l-4 4Z");
}
</style><path class="mae_xkbyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cloud-edit-sharp"} {...others} />);
}

export default Component;

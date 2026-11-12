import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n471yla-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 7h6M3 15h18M3 21h14M7 3.4l1.2 2.4l2.8.4l-2 2l.4 2.4L7 9.4l-2.4 1.2l.4-2.4l-2-2l2.8-.4Z");
}
</style><path class="n471yla-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-star"} {...others} />);
}

export default Component;

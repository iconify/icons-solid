import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.muaajq8fs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 7l4-4v6l2 2l-2 2l2 2l-5 2l-2 4h-4l-2-4l-5-2l2-2l-2-2l2-2V3l4 4zm-6 4l1 1m5-1l-1 1m-2 6h.01");
}
</style><path class="muaajq8fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wolf-sharp"} {...others} />);
}

export default Component;

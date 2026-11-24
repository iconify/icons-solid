import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tzc5rl5et {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 17c-1.28 0-2.36.36-3 1l-1 1c-.738.738-2-.524-2-2V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2m-4 7c-1-2-4-2-4 0s4 4 4 4s4-2 4-4s-3-2-4 0");
}
</style><path class="tzc5rl5et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-heart-corner-round"} {...others} />);
}

export default Component;

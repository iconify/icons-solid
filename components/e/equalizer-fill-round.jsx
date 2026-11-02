import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l4ly28bhl {
  fill: currentColor;
  d: path("M7 3v8a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m6 0v2a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m6 6a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm-5-1a1 1 0 0 1 0 2h-1v11a1 1 0 0 1-2 0V10h-1a1 1 0 0 1 0-2Zm6 4a1 1 0 0 1 0 2h-1v7a1 1 0 0 1-2 0v-7h-1a1 1 0 0 1 0-2ZM8 14a1 1 0 0 1 0 2H7v5a1 1 0 0 1-2 0v-5H4a1 1 0 0 1 0-2Z");
}
</style><path class="l4ly28bhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:equalizer-fill-round"} {...others} />);
}

export default Component;

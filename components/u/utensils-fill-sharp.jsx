import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nvyo_xbcs {
  fill: currentColor;
  d: path("M4 10h2V3a1 1 0 0 1 2 0v7h2V3a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1H8v9a1 1 0 0 1-2 0v-9H3a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0Zm18 11a1 1 0 0 1-2 0v-6h-4a1 1 0 0 1-1-1V8c0-1.596.627-3.117 1.757-4.243a6 6 0 0 1 1.907-1.285A5.9 5.9 0 0 1 21 2a1 1 0 0 1 1 1Z");
}
</style><path class="nvyo_xbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:utensils-fill-sharp"} {...others} />);
}

export default Component;

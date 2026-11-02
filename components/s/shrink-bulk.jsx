import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wrgo91_7r {
  fill: currentColor;
  d: path("M14 11a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2Zm-4 2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-5H4a1 1 0 0 1 0-2Z");
}
</style><path class="wrgo91_7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shrink-bulk"} {...others} />);
}

export default Component;

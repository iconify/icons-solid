import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_y0nob3r {
  fill: currentColor;
  d: path("M7 4h10a5 5 0 0 1 5 5v4H2V9a5 5 0 0 1 5-5m4 16H7a5 5 0 0 1-5-5h9Zm11-5a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20h-4v-5Z");
}
</style><path class="l_y0nob3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:touchpad-fill-round"} {...others} />);
}

export default Component;

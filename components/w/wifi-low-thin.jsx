import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.k6wy-0bab {
  fill: currentColor;
  d: path("M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8m34.35-42.23a72 72 0 0 0-84.7 0a4 4 0 1 0 4.71 6.46a64 64 0 0 1 75.28 0a4 4 0 1 0 4.71-6.46");
}
</style><path class="k6wy-0bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wifi-low-thin"} {...others} />);
}

export default Component;

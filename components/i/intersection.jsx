import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u8x_ifb9s {
  fill: currentColor;
  d: path("M208 120v80a8 8 0 0 1-16 0v-80a64 64 0 0 0-128 0v80a8 8 0 0 1-16 0v-80a80 80 0 0 1 160 0");
}
</style><path class="u8x_ifb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:intersection"} {...others} />);
}

export default Component;

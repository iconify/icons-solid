import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.s0pof7bzf {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-104a40 40 0 1 0-65.94 30.44l-13.38 30.33A8 8 0 0 0 96 184h64a8 8 0 0 0 7.32-11.23l-13.38-30.33A40.14 40.14 0 0 0 168 112m-31.32 31l11 25.05h-39.41l11-25.05a8 8 0 0 0-3.27-10.21a24 24 0 1 1 24 0a8 8 0 0 0-3.32 10.21");
}
</style><path class="s0pof7bzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:keyhole"} {...others} />);
}

export default Component;

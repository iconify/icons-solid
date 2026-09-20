import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.blk7sbvga {
  fill: currentColor;
  d: path("M160 104a32 32 0 1 1-32-32a32 32 0 0 1 32 32m72 104a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h88v-16.4a80 80 0 1 1 16 0V200h88a8 8 0 0 1 8 8m-104-56a48 48 0 1 0-48-48a48.05 48.05 0 0 0 48 48");
}
</style><path class="blk7sbvga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:webcam-fill"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fnn_p0clv {
  fill: currentColor;
  d: path("M177.1 114.5A48 48 0 0 0 140 36H64a12 12 0 0 0-12 12v152a12 12 0 0 0 12 12h88a52 52 0 0 0 25.1-97.5ZM76 60h64a24 24 0 0 1 0 48H76Zm76 128H76v-56h76a28 28 0 0 1 0 56Z");
}
</style><path class="fnn_p0clv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-bolder-bold"} {...others} />);
}

export default Component;

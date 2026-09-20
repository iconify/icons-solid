import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zv4y3d_fp {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m32-128H96a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-6 64h-52v-52h52Z");
}
</style><path class="zv4y3d_fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:stop-circle-light"} {...others} />);
}

export default Component;

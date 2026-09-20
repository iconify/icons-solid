import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ygy78pa7u {
  fill: currentColor;
  d: path("M206 208a6 6 0 0 1-6 6h-72a86 86 0 0 1 0-172h72a6 6 0 0 1 0 12h-72a74 74 0 0 0 0 148h72a6 6 0 0 1 6 6");
}
</style><path class="ygy78pa7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subset-proper-of-light"} {...others} />);
}

export default Component;

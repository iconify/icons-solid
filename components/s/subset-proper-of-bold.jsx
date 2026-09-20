import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oz2masbet {
  fill: currentColor;
  d: path("M212 208a12 12 0 0 1-12 12h-72a92 92 0 0 1 0-184h72a12 12 0 0 1 0 24h-72a68 68 0 0 0 0 136h72a12 12 0 0 1 12 12");
}
</style><path class="oz2masbet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subset-proper-of-bold"} {...others} />);
}

export default Component;

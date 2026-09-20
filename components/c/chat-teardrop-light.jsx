import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u2nn92blz {
  fill: currentColor;
  d: path("M132 26a98.11 98.11 0 0 0-98 98v84a14 14 0 0 0 14 14h84a98 98 0 0 0 0-196m0 184H48a2 2 0 0 1-2-2v-84a86 86 0 1 1 86 86");
}
</style><path class="u2nn92blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chat-teardrop-light"} {...others} />);
}

export default Component;

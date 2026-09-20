import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yrx1z8-yu {
  fill: currentColor;
  d: path("M132 20A104.11 104.11 0 0 0 28 124v84a20 20 0 0 0 20 20h84a104 104 0 0 0 0-208m0 184H52v-80a80 80 0 1 1 80 80m-8-76a16 16 0 1 1-16-16a16 16 0 0 1 16 16m48 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="yrx1z8-yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chat-teardrop-dots-bold"} {...others} />);
}

export default Component;

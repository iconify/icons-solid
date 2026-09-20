import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fg7v7o45s {
  fill: currentColor;
  d: path("M246 128a54.06 54.06 0 0 1-54 54H48a38 38 0 0 1 0-76h144a22 22 0 0 1 0 44H80a6 6 0 0 1 0-12h112a10 10 0 0 0 0-20H48a26 26 0 0 0 0 52h144a42 42 0 0 0 0-84H80a6 6 0 0 1 0-12h112a54.06 54.06 0 0 1 54 54");
}
</style><path class="fg7v7o45s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:paperclip-horizontal-light"} {...others} />);
}

export default Component;

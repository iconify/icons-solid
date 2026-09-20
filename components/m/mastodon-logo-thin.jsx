import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.j_xvtobkj {
  fill: currentColor;
  d: path("M184 36H72a36 36 0 0 0-36 36v120a36 36 0 0 0 36 36h88a4 4 0 0 0 0-8H72a28 28 0 0 1-28-28v-12h140a36 36 0 0 0 36-36V72a36 36 0 0 0-36-36m28 108a28 28 0 0 1-28 28H44V72a28 28 0 0 1 28-28h112a28 28 0 0 1 28 28Zm-32-40v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a28 28 0 0 1 52-14.41A28 28 0 0 1 180 104");
}
</style><path class="j_xvtobkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:mastodon-logo-thin"} {...others} />);
}

export default Component;

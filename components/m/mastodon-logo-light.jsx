import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d40bgrbnu {
  fill: currentColor;
  d: path("M184 34H72a38 38 0 0 0-38 38v120a38 38 0 0 0 38 38h88a6 6 0 0 0 0-12H72a26 26 0 0 1-26-26v-10h138a38 38 0 0 0 38-38V72a38 38 0 0 0-38-38m26 110a26 26 0 0 1-26 26H46V72a26 26 0 0 1 26-26h112a26 26 0 0 1 26 26Zm-28-40v32a6 6 0 0 1-12 0v-32a18 18 0 0 0-36 0v32a6 6 0 0 1-12 0v-32a18 18 0 0 0-36 0v32a6 6 0 0 1-12 0v-32a30 30 0 0 1 54-18a30 30 0 0 1 54 18");
}
</style><path class="d40bgrbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:mastodon-logo-light"} {...others} />);
}

export default Component;

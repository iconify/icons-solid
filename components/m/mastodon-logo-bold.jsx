import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.r-q9h27dr {
  fill: currentColor;
  d: path("M184 28H72a44.05 44.05 0 0 0-44 44v120a44.05 44.05 0 0 0 44 44h88a12 12 0 0 0 0-24H72a20 20 0 0 1-20-20v-4h132a44.05 44.05 0 0 0 44-44V72a44.05 44.05 0 0 0-44-44m20 116a20 20 0 0 1-20 20H52V72a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20Zm-16-40v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a36 36 0 0 1 60-26.8a36 36 0 0 1 60 26.8");
}
</style><path class="r-q9h27dr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:mastodon-logo-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.iey_csbqy {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V150h26a6 6 0 0 0 0-12h-26v-26a18 18 0 0 1 18-18h16a6 6 0 0 0 0-12h-16a30 30 0 0 0-30 30v26H96a6 6 0 0 0 0 12h26v67.8a90 90 0 1 1 12 0");
}
</style><path class="iey_csbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:facebook-logo-light"} {...others} />);
}

export default Component;

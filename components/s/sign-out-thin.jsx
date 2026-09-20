import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.f40uwmbpd {
  fill: currentColor;
  d: path("M116 216a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H52v168h60a4 4 0 0 1 4 4m110.83-90.83l-40-40a4 4 0 0 0-5.66 5.66L214.34 124H112a4 4 0 0 0 0 8h102.34l-33.17 33.17a4 4 0 0 0 5.66 5.66l40-40a4 4 0 0 0 0-5.66");
}
</style><path class="f40uwmbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sign-out-thin"} {...others} />);
}

export default Component;

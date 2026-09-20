import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nfw2wdotx {
  fill: currentColor;
  d: path("M208 76h-68V48a12 12 0 0 0-24 0v28H48a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h68v28a12 12 0 0 0 24 0v-28h68a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20m-4 80H52v-56h152Z");
}
</style><path class="nfw2wdotx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-center-horizontal-simple-bold"} {...others} />);
}

export default Component;

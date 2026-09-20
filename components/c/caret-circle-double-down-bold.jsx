import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ppg1217fx {
  fill: currentColor;
  d: path("M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84ZM168.5 79.49a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 103l23.53-23.53a12 12 0 0 1 16.97.02m0 56a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 159l23.53-23.52a12 12 0 0 1 16.97.04Z");
}
</style><path class="ppg1217fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-circle-double-down-bold"} {...others} />);
}

export default Component;

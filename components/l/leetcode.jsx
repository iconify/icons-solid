import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.js1xycbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.81 34.877l-6.938 6.937a5.726 5.726 0 0 1-8.115 0L8.613 31.67a5.726 5.726 0 0 1 0-8.116L18.757 13.41a5.726 5.726 0 0 1 8.115 0l7.628 7.627M18.757 13.41l9.008-8.91m-8.181 23.092h21.49");
}
</style><path class="js1xycbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:leetcode"} {...others} />);
}

export default Component;

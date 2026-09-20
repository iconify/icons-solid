import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.je1vjacan {
  fill: currentColor;
  d: path("M220 144v64a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-64a4 4 0 0 1 8 0v60h168v-60a4 4 0 0 1 8 0M90.83 74.83L124 41.66V144a4 4 0 0 0 8 0V41.66l33.17 33.17a4 4 0 1 0 5.66-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66");
}
</style><path class="je1vjacan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:upload-simple-thin"} {...others} />);
}

export default Component;

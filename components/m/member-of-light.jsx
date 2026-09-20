import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gome0acxz {
  fill: currentColor;
  d: path("M200 134H54.26A74.09 74.09 0 0 0 128 202h72a6 6 0 0 1 0 12h-72a86 86 0 0 1 0-172h72a6 6 0 0 1 0 12h-72a74.09 74.09 0 0 0-73.74 68H200a6 6 0 0 1 0 12");
}
</style><path class="gome0acxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:member-of-light"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.lrnzat1gd {
  fill: currentColor;
  d: path("M174.63 81.35a80 80 0 1 0-93.28 93.28a80 80 0 1 0 93.28-93.28M96 160a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64");
}
</style><path class="lrnzat1gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subtract-fill"} {...others} />);
}

export default Component;

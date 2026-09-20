import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h_aqshbbh {
  fill: currentColor;
  d: path("M222 192a6 6 0 0 1-12 0c0-80.5-65.5-146-146-146a6 6 0 0 1 0-12c87.12 0 158 70.88 158 158M64 106a6 6 0 0 0 0 12a74.09 74.09 0 0 1 74 74a6 6 0 0 0 12 0a86.1 86.1 0 0 0-86-86m4 72a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="h_aqshbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rss-simple-light"} {...others} />);
}

export default Component;

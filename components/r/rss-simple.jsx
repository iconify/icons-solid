import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ebsdd9bwv {
  fill: currentColor;
  d: path("M224 192a8 8 0 0 1-16 0c0-79.4-64.6-144-144-144a8 8 0 0 1 0-16c88.22 0 160 71.78 160 160M64 104a8 8 0 0 0 0 16a72.08 72.08 0 0 1 72 72a8 8 0 0 0 16 0a88.1 88.1 0 0 0-88-88m4 72a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><path class="ebsdd9bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rss-simple"} {...others} />);
}

export default Component;

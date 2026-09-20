import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ykcmmibhp {
  fill: currentColor;
  d: path("M240 128v64a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h44.69L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 124.69l34.34-34.35a8 8 0 0 1 11.32 0L224 172.69V128a8 8 0 0 1 16 0");
}
</style><path class="ykcmmibhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trend-down"} {...others} />);
}

export default Component;

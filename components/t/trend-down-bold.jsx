import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.t24vtgbjn {
  fill: currentColor;
  d: path("M244 128v64a12 12 0 0 1-12 12h-64a12 12 0 0 1 0-24h35l-67-67l-31.51 31.52a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L96 119l31.51-31.52a12 12 0 0 1 17 0L220 163v-35a12 12 0 0 1 24 0");
}
</style><path class="t24vtgbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trend-down-bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.juv36bc3n {
  fill: currentColor;
  d: path("M238 88v64a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h49.45l-25.8-25.63A90 90 0 0 0 38 184a6 6 0 0 1-12 0a102 102 0 0 1 174.12-72.12l25.88 25.7V88a6 6 0 0 1 12 0");
}
</style><path class="juv36bc3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-arc-right-light"} {...others} />);
}

export default Component;

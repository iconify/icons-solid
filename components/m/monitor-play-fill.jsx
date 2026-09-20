import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.uycmi5o9i {
  fill: currentColor;
  d: path("M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m64-160v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24m-68 56a8 8 0 0 0-3.41-6.55l-40-28A8 8 0 0 0 108 92v56a8 8 0 0 0 12.59 6.55l40-28A8 8 0 0 0 164 120");
}
</style><path class="uycmi5o9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:monitor-play-fill"} {...others} />);
}

export default Component;

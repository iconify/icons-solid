import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wo6brd1fc {
  fill: currentColor;
  d: path("M128 128a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12M48 76h132a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24m52 104H48a12 12 0 0 0 0 24h52a12 12 0 0 0 0-24m132.49-20.49a12 12 0 0 0-17 0L196 179v-67a12 12 0 0 0-24 0v67l-19.51-19.52a12 12 0 0 0-17 17l40 40a12 12 0 0 0 17 0l40-40a12 12 0 0 0 0-16.97");
}
</style><path class="wo6brd1fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sort-ascending-bold"} {...others} />);
}

export default Component;

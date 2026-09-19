import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uyyeshb6v {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM14 5v14h-4V5zM6 5h2v14H6zm10 14V5h2v14z");
}
</style><path class="uyyeshb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-vertical-shades"} {...others} />);
}

export default Component;

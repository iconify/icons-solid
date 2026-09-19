import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dpnzz-44k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.75 13.25L45.5 24L24 45.5L2.5 24L24 2.5zv21.5l-15.357-6.143l-6.143 6.143v-21.5l15.357 6.143z");
}
</style><path class="dpnzz-44k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nissay"} {...others} />);
}

export default Component;

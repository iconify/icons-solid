import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s_b81p-ys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.136 31A9.97 9.97 0 0 1 24 34c-5.523 0-10-4.477-10-10s4.477-10 10-10c2.796 0 5.32 1.15 7.136 3H44.31C41.405 8.567 33.42 2.5 24 2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5c9.42 0 17.405-6.067 20.311-14.5zm2.234-10.5h11.847M45.5 24H33.986m-.616 3.5h11.847");
}
</style><path class="s_b81p-ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cryptee"} {...others} />);
}

export default Component;

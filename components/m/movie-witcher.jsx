import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p8pfl1b_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.178 17.951V9.985h-3.68L14.839 33.13L9.18 9.985H5.5V33.55m7.34 2.976l1.999-3.396m6.526-.996l.929 5.881h2.582l5.659-23.145l5.659 23.145h2.581L42.5 14.45m-9.966-2.977l-1.999 3.397");
}
</style><path class="p8pfl1b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:movie-witcher"} {...others} />);
}

export default Component;

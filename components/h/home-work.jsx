import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1ig3p5mc {
  fill: currentColor;
  d: path("M17.23 8.77h1.54V7.23h-1.54zm0 4h1.54v-1.54h-1.54zm0 4h1.54v-1.54h-1.54zM2 20v-8.5l6-4.27l6 4.27V20H9.846v-5.077H6.154V20zm14 0v-9.5l-5.615-4.03V4H22v16z");
}
</style><path class="j1ig3p5mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:home-work"} {...others} />);
}

export default Component;

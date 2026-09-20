import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdxhwm0sm {
  fill: currentColor;
  d: path("M16 18v-2h2.6l-5.2-5.15l-4 4L2 7.4L3.4 6l6 6l4-4l6.6 6.6V12h2v6z");
}
</style><path class="fdxhwm0sm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:trending-down-outline"} {...others} />);
}

export default Component;

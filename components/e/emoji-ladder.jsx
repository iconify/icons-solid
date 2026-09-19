import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i60ui7bsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.872 42.5l12-37m-1.743 37l11.999-37M23.674 9.191h10.257m-13.058 8.638H31.13m-5.602 17.274H15.27m2.802-8.637h10.257");
}
</style><path class="i60ui7bsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-ladder"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qljf82c2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.66 4.5c0 4.09-13 15.8-13 25.58s7.67 13.42 13 13.42c4.77 0 13.64-2 13.64-12.62c0-11.6-13.64-18.53-13.64-26.38");
}
</style><path class="qljf82c2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flud"} {...others} />);
}

export default Component;

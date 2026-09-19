import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dl8-o1b1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.353 17c3.785 0 6.853 3.13 6.853 7s-3.068 7-6.853 7S4.5 27.87 4.5 24s3.068-7 6.853-7m9.002 0v14h5.728m2.149 0l7.634-14L43.5 31");
}
</style><path class="dl8-o1b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ola-electric"} {...others} />);
}

export default Component;

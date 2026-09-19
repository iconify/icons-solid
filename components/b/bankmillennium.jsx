import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.njz43f1lt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.951 5.5c6.273.786 8.011 6.101 8.863 8.007L25.822 40.37l11.626-27.614l5.6 29.743");
}

.z-mln4uym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.158 42.5s6.568-29.196 4.813-32.657");
}
</style><path class="njz43f1lt"/><path class="z-mln4uym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bankmillennium"} {...others} />);
}

export default Component;

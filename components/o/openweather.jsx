import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.y710xcb7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.673 30.636a17.694 17.694 0 1 0-33.345 0M4.5 30.635h39M8.791 35.817h15.706m4.393 0h2.982m4.392 0h2.982m-24.64 5.181h19.757");
}
</style><path class="y710xcb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:openweather"} {...others} />);
}

export default Component;

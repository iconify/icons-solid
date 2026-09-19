import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qe9gkb-zf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 9v30M9.375 15.207v17.586m9.75-17.586v17.586M4.5 20.897v6.206M33.75 9v30m-4.875-23.793v17.586m9.75-17.586v17.586M24 20.897v6.206m19.5-6.206v6.206");
}
</style><path class="qe9gkb-zf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:substreamer"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hdm3vxbtb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.25 4.844a4 4 0 0 0-3.465 2L3.035 22a4 4 0 0 0 0 4l8.75 15.156a4 4 0 0 0 3.465 2h17.5a4 4 0 0 0 3.465-2L44.965 26a4 4 0 0 0 0-4l-8.75-15.156a4 4 0 0 0-3.465-2zm-7.84 9.578l33.18 19.156");
}

.ipwsvnnti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.59 14.422L24 24V4.844");
}
</style><path class="hdm3vxbtb"/><path class="ipwsvnnti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:moneyhub"} {...others} />);
}

export default Component;

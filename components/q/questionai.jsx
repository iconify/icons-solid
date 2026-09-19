import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mymy8o8cm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.442 31.21v3.861l-8.44.03a11.1 11.1 0 1 1 8.44-3.892Z");
}

.naij3yvvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.065 36.015l-.003 6.485h-14.06a18.5 18.5 0 1 1 14.75-29.665a18.5 18.5 0 0 1-.687 23.18");
}
</style><path class="naij3yvvb"/><path class="mymy8o8cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:questionai"} {...others} />);
}

export default Component;

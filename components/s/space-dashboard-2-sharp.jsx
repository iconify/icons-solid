import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhht-ibwb {
  fill: currentColor;
  d: path("M20 20V4zM4 20h9.5V4H4zm10.5 0H20v-7.5h-5.5zm0-8.5H20V4h-5.5z");
}
</style><path class="fhht-ibwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:space-dashboard-2-sharp"} {...others} />);
}

export default Component;

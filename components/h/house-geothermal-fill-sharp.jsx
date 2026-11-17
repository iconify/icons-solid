import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f97756_8h {
  fill: currentColor;
  d: path("m12.659 2.247l5.333 4.667a1 1 0 0 1 .341.753V15a1 1 0 0 1-1 1H13v2h5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1h5v-2H6.667a1 1 0 0 1-1-1V7.667a1 1 0 0 1 .341-.753l5.333-4.667c.378-.329.94-.329 1.318 0");
}
</style><path class="f97756_8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-geothermal-fill-sharp"} {...others} />);
}

export default Component;

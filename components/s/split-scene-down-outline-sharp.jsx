import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lppd0q3js {
  fill: currentColor;
  d: path("M5 9.116V4h14v5.116h-1V5H6v4.116zM5 20v-7.5H3v-1h18v1h-2V20zM6 5h12z");
}
</style><path class="lppd0q3js"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:split-scene-down-outline-sharp"} {...others} />);
}

export default Component;

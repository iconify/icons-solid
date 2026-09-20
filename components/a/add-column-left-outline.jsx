import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wdyz72o0x {
  fill: currentColor;
  d: path("M20 19V5h-6.558v14zM5 20v-3.116h1V19h6.442V5H6v2.116H5V4h16v16zm8.442-8h-1zM5 14.5v-2H3v-1h2v-2h1v2h2v1H6v2z");
}
</style><path class="wdyz72o0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-column-left-outline"} {...others} />);
}

export default Component;

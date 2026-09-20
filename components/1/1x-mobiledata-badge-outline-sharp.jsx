import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uphydec3g {
  fill: currentColor;
  d: path("M7.5 16.5h1v-9h-3v1h2zm4.462 0h1.077l2.211-3.752l2.212 3.752h1.115l-2.77-4.73l2.5-4.27h-1.076l-1.962 3.348L13.308 7.5h-1.116l2.52 4.308zM2 20V4h20v16zm1-1h18V5H3zm0 0V5z");
}
</style><path class="uphydec3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:1x-mobiledata-badge-outline-sharp"} {...others} />);
}

export default Component;

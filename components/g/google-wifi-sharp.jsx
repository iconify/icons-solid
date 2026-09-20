import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9iz1xbai {
  fill: currentColor;
  d: path("M3.658 10.616L4.038 5h15.924l.38 5.616zM5.692 19l-.267-.846H3.173l.418-6.52H20.41l.417 6.52h-2.252l-.267.846z");
}
</style><path class="d9iz1xbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:google-wifi-sharp"} {...others} />);
}

export default Component;

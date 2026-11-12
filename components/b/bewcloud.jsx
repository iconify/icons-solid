import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zed5lgbzq.css';
import '../../css/r/ri_v651ed.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGQG6OzcJt" x1="147.689" x2="780.759" y1="-392.44" y2="-392.44" gradientTransform="matrix(.8088 0 0 -.4461 -119.44 80.95)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zed5lgbzq"/><stop offset="1" class="zed5lgbzq"/></linearGradient><path fill="url(#SVGQG6OzcJt)" class="ri_v651ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bewcloud"} {...others} />);
}

export default Component;

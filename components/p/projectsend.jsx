import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg4p2bc8g.css';
import '../../css/p/p92lynpoq.css';
import '../../css/l/lkv5ngb6h.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGKPp1AbrK" x1="82.165" x2="419.033" y1="678.269" y2="352.959" gradientTransform="translate(-5 -254.252)" gradientUnits="userSpaceOnUse"><stop offset=".168" class="qg4p2bc8g"/><stop offset=".813" class="p92lynpoq"/></linearGradient><path fill="url(#SVGKPp1AbrK)" class="lkv5ngb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:projectsend"} {...others} />);
}

export default Component;

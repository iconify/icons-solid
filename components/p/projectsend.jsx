import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg4p2bc8g.css';
import '../../css/p/p92lynpoq.css';
import '../../css/l/lkv5ngb6h.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGpE1RZbAk" x1="77.2" x2="414" y1="424" y2="98.7" gradientUnits="userSpaceOnUse"><stop offset=".168" class="qg4p2bc8g"/><stop offset=".813" class="p92lynpoq"/></linearGradient><path fill="url(#SVGpE1RZbAk)" class="lkv5ngb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:projectsend"} {...others} />);
}

export default Component;

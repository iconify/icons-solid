import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwsqs5bzr.css';
import '../../css/b/b0ea5lb7o.css';
import '../../css/j/j48clrlca.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGtHKZNdYr" x1="256" x2="256" y1="91.1" y2="421.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="lwsqs5bzr"/><stop offset="1" class="b0ea5lb7o"/></linearGradient><path fill="url(#SVGtHKZNdYr)" class="j48clrlca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seafile"} {...others} />);
}

export default Component;

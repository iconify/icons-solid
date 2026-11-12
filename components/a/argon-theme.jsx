import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl3rdq6eh.css';
import '../../css/p/p8uw2_y-y.css';
import '../../css/x/x7-ndsbds.css';
import '../../css/a/aeem10l4e.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGSGPlGc1d" x1="21" x2="491" y1="21" y2="491" gradientUnits="userSpaceOnUse"><stop offset="0" class="rl3rdq6eh"/><stop offset="1" class="p8uw2_y-y"/></linearGradient><path fill="url(#SVGSGPlGc1d)" class="x7-ndsbds"/><path class="aeem10l4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:argon-theme"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp935pb2i.css';
import '../../css/c/ca5grhk1u.css';
import '../../css/n/nw9d4_b1h.css';
import '../../css/y/yj7wg2bbf.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVGRfIQhcUt" cx="256" cy="256" r="255.23" gradientUnits="userSpaceOnUse"><stop offset="0" class="sp935pb2i"/><stop offset=".1" class="sp935pb2i"/><stop offset=".5" class="ca5grhk1u"/><stop offset="1" class="nw9d4_b1h"/></radialGradient><path fill="url(#SVGRfIQhcUt)" class="yj7wg2bbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:instagram-reels"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/v/vwkut_xdu.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGTBnyAb7W" x1="256" x2="256" y2="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGTBnyAb7W)" class="vwkut_xdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yacreaderlibrary-light"} {...others} />);
}

export default Component;

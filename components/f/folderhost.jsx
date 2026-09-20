import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo315ybiu.css';
import '../../css/y/yhc5jdzvp.css';
import '../../css/u/u27udoylh.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGGBPZIFRM" x1="0" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="xo315ybiu"/><stop offset="1" class="yhc5jdzvp"/></linearGradient><path fill="url(#SVGGBPZIFRM)" class="u27udoylh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:folderhost"} {...others} />);
}

export default Component;

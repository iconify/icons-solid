import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfwdcnlyh.css';
import '../../css/u/ux0hlqb8q.css';
import '../../css/u/u_1f-feup.css';
import '../../css/s/sxf62sb0r.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGo9AChcla" x1="256" x2="256" y1="246.983" y2="740.365" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="dfwdcnlyh"/><stop offset="1" class="ux0hlqb8q"/></linearGradient><path fill="url(#SVGo9AChcla)" class="u_1f-feup"/><path class="sxf62sb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:faridoon"} {...others} />);
}

export default Component;

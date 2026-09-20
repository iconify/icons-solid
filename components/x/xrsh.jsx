import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0te-vbrc.css';
import '../../css/s/sjb59pbhp.css';
import '../../css/n/n0gdaxbku.css';
import '../../css/x/xah9mvbce.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y0te-vbrc"/><linearGradient id="SVGuYJsXc4w" x1="-788.365" x2="-628.6" y1="300.645" y2="300.645" gradientTransform="matrix(2.8346 0 0 -2.8346 2264.27 1108.21)" gradientUnits="userSpaceOnUse"><stop offset="0" class="sjb59pbhp"/><stop offset="1" class="n0gdaxbku"/></linearGradient><path fill="url(#SVGuYJsXc4w)" class="xah9mvbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:xrsh"} {...others} />);
}

export default Component;

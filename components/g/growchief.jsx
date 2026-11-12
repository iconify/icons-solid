import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bov0584ws.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/stui2mbih.css';
import '../../css/p/plasycqgq.css';
import '../../css/h/hel7e2brh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bov0584ws"/><radialGradient id="SVGSOOTpdCx" cx="-676.66" cy="812.876" r="5.565" gradientTransform="rotate(74.667 -31589.157 -9986.16)scale(19.9815 -46.7329)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="stui2mbih"/></radialGradient><path fill="url(#SVGSOOTpdCx)" class="plasycqgq"/><path class="hel7e2brh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:growchief"} {...others} />);
}

export default Component;

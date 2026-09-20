import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwiwzfbxe.css';
import '../../css/z/z_hfrbcss.css';
import '../../css/f/fsg0cfggo.css';
import '../../css/g/gitftzdpx.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGJDYijb5u" x1="-695.157" x2="-695.157" y1="789.583" y2="792.749" gradientTransform="matrix(115 0 0 -115 80199 91314)" gradientUnits="userSpaceOnUse"><stop offset="0" class="mwiwzfbxe"/><stop offset="1" class="z_hfrbcss"/></linearGradient><path fill="url(#SVGJDYijb5u)" class="fsg0cfggo"/><path class="gitftzdpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:string-is"} {...others} />);
}

export default Component;

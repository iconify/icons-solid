import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl3sx8bsx.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a-hl-bcwx.css';
import '../../css/w/wo9-6d-kp.css';
import '../../css/p/pd0z_fbuy.css';
import '../../css/m/mx88--bnv.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGCN404cPG"><path class="cl3sx8bsx"/></clipPath></defs><g clip-path="url(#SVGCN404cPG)" transform="translate(37.5)scale(.94)" class="d2kvgvbvc"><path class="a-hl-bcwx"/><path class="wo9-6d-kp"/><path class="pd0z_fbuy"/><path class="mx88--bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:dj-4x3"} {...others} />);
}

export default Component;

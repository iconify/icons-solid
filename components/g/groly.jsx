import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wua4vtb3w.css';
import '../../css/a/amahmz-yy.css';
import '../../css/c/cbb3l1bgd.css';
import '../../css/k/kgiwegb6m.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGbnadVb6w" x1="-701.627" x2="-700.627" y1="796.447" y2="795.447" gradientTransform="matrix(512 0 0 -512 359233 407781)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wua4vtb3w"/><stop offset="1" class="amahmz-yy"/></linearGradient><path fill="url(#SVGbnadVb6w)" class="cbb3l1bgd"/><path class="kgiwegb6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:groly"} {...others} />);
}

export default Component;

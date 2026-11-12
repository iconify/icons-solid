import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx32gdm7x.css';
import '../../css/a/algf38bxk.css';
import '../../css/t/tbxz3xbtt.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGu2Rgje2r" x1="18.6" x2="534.7" y1="-27.8" y2="488.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="qx32gdm7x"/><stop offset="1"/></linearGradient><path fill="url(#SVGu2Rgje2r)" class="algf38bxk"/><path class="tbxz3xbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adguard-home-central-manager-dark"} {...others} />);
}

export default Component;

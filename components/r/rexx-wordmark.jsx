import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixp4m2azo.css';
import '../../css/b/b8v3xfb5e.css';
import '../../css/i/im04-0bkz.css';
import '../../css/d/dluppabre.css';
import '../../css/m/ml5l-nd0d.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGV7QPNdxd" x1="4.154" x2="4.154" y1="108.707" y2="23.639" gradientTransform="translate(-4.294 -1.099)scale(1.03354)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ixp4m2azo"/><stop offset=".5" class="b8v3xfb5e"/><stop offset="1" class="im04-0bkz"/></linearGradient></defs><path fill="url(#SVGV7QPNdxd)" class="dluppabre"/><path class="ml5l-nd0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:rexx-wordmark"} {...others} />);
}

export default Component;

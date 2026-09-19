import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_gp7lgqe.css';
import '../../css/s/sav6x4bmf.css';
import '../../css/w/wgt8zfbtg.css';
import '../../css/u/uu1iz8zqe.css';
import '../../css/c/cscv_-p2h.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGJ8Pkhdiw" x1="128" x2="128" y1="0" y2="256" gradientTransform="translate(0 50.95)scale(.10032)" gradientUnits="userSpaceOnUse"><stop offset="0" class="g_gp7lgqe"/><stop offset="1" class="sav6x4bmf"/></linearGradient></defs><path class="wgt8zfbtg"/><path fill="url(#SVGJ8Pkhdiw)" class="uu1iz8zqe"/><path class="cscv_-p2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:trello-wordmark"} {...others} />);
}

export default Component;

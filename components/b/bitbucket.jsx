import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/f/fl96_-wvu.css';
import '../../css/s/ss16x7byz.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGlTkM2b2Q" x1="28.593" x2="16.672" y1="14.226" y2="23.532" gradientTransform="scale(4)" gradientUnits="userSpaceOnUse"><stop offset=".176" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient></defs><path class="fl96_-wvu"/><path fill="url(#SVGlTkM2b2Q)" class="ss16x7byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:bitbucket"} {...others} />);
}

export default Component;

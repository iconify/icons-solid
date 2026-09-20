import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/a/acqam2b4p.css';
import '../../css/h/hhq1vco0v.css';

const viewBox = {"width":256,"height":256};
const content = `<defs><linearGradient id="SVGAbOJnbmb" x1="99.7%" x2="39.8%" y1="15.8%" y2="97.4%"><stop offset="0%" class="sav6x4bmf"/><stop offset="92.3%" class="g_gp7lgqe"/></linearGradient></defs><path fill="url(#SVGAbOJnbmb)" class="acqam2b4p"/><path class="hhq1vco0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:atlassian"} {...others} />);
}

export default Component;

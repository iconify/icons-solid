import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/otutvum0e.css';
import '../../css/b/bnkr13bhw.css';
import '../../css/y/yyif5dk8a.css';
import '../../css/x/xe65wvb-d.css';
import '../../css/j/j3c_s-bua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="otutvum0e wm-k"/><path class="bnkr13bhw wm-s"/><path class="wm-shadow yyif5dk8a"/><path class="wm-k xe65wvb-d"/><path class="j3c_s-bua wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-x-engrave"} {...others} />);
}

export default Component;

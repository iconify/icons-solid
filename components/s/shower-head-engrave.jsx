import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ne9-j4b8v.css';
import '../../css/r/r2gw6ybqd.css';
import '../../css/p/pjkpc3btw.css';
import '../../css/w/wbrax19ht.css';
import '../../css/w/w439gnkso.css';
import '../../css/a/afxiy6lsc.css';
import '../../css/f/fmtboebos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ne9-j4b8v wm-k"/><path class="r2gw6ybqd wm-a"/><path class="pjkpc3btw wm-s"/><path class="wbrax19ht wm-shadow"/><path class="w439gnkso wm-a"/><path class="afxiy6lsc wm-k"/><path class="fmtboebos wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shower-head-engrave"} {...others} />);
}

export default Component;

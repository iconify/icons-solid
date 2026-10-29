import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xam1dm6sv.css';
import '../../css/m/mal8gswuu.css';
import '../../css/p/p4b-8obnr.css';
import '../../css/t/tbbshccdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xam1dm6sv"/><path class="mal8gswuu wm-shadow"/><path class="p4b-8obnr wm-k"/><path class="tbbshccdj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ear-engrave"} {...others} />);
}

export default Component;

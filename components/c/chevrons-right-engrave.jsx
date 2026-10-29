import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dtakehbua.css';
import '../../css/f/f0qq2vbkf.css';
import '../../css/q/qnbwq9lbv.css';
import '../../css/b/bnbj9bspw.css';
import '../../css/e/et5-78afr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dtakehbua wm-k"/><path class="f0qq2vbkf wm-a"/><path class="qnbwq9lbv wm-shadow"/><path class="bnbj9bspw wm-k"/><path class="et5-78afr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-right-engrave"} {...others} />);
}

export default Component;

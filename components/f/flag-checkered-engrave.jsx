import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t6pm5lblm.css';
import '../../css/a/av_6h4m0w.css';
import '../../css/w/wosxn0yeo.css';
import '../../css/z/zbms0lbwh.css';
import '../../css/e/ea_szbbks.css';
import '../../css/v/vs3_2yq5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t6pm5lblm wm-k"/><path class="av_6h4m0w wm-a"/><path class="wm-shadow wosxn0yeo"/><path class="wm-k zbms0lbwh"/><path class="ea_szbbks wm-k"/><path class="vs3_2yq5q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flag-checkered-engrave"} {...others} />);
}

export default Component;

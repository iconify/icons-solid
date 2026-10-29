import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h94989bqr.css';
import '../../css/c/c4bils6ki.css';
import '../../css/b/bbj5cibiu.css';
import '../../css/g/g_3i-5a_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h94989bqr wm-k"/><path class="c4bils6ki wm-shadow"/><path class="bbj5cibiu wm-k"/><path class="g_3i-5a_q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:banknote-engrave"} {...others} />);
}

export default Component;

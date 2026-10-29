import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ib3xs0q6j.css';
import '../../css/q/q71f3m8ff.css';
import '../../css/n/n2ucdeb3b.css';
import '../../css/q/qo-b4ibmq.css';
import '../../css/y/y27beivkv.css';
import '../../css/n/nq-j1qtfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ib3xs0q6j wm-k"/><path class="q71f3m8ff wm-a"/><path class="n2ucdeb3b wm-shadow"/><path class="qo-b4ibmq wm-k"/><path class="wm-a y27beivkv"/><path class="nq-j1qtfz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:save-all-engrave"} {...others} />);
}

export default Component;

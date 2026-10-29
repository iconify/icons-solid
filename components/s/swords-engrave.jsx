import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l85ttcc8d.css';
import '../../css/n/nj_k7fbow.css';
import '../../css/f/fyutsyjov.css';
import '../../css/i/iy5v8lbll.css';
import '../../css/t/tmj-ls_rw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l85ttcc8d wm-k"/><path class="nj_k7fbow wm-a"/><path class="fyutsyjov wm-shadow"/><path class="iy5v8lbll wm-k"/><path class="tmj-ls_rw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:swords-engrave"} {...others} />);
}

export default Component;

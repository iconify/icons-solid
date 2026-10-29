import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jgxljyz3r.css';
import '../../css/w/wqpjdjb2g.css';
import '../../css/n/nqkbd8bil.css';
import '../../css/r/r14mvzszd.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/l/l532kjbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jgxljyz3r wm-k"/><path class="wm-a wqpjdjb2g"/><path class="nqkbd8bil wm-s"/><path class="r14mvzszd wm-shadow"/><path class="ejg_wxkov wm-k"/><path class="wm-a xa3jgydgh"/><path class="l532kjbmd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heading-1-engrave"} {...others} />);
}

export default Component;

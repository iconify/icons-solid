import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxc6phcbm.css';
import '../../css/o/o4pm3u69d.css';
import '../../css/p/po_8njggz.css';
import '../../css/w/wubj_kbpw.css';
import '../../css/d/d04ezk9jt.css';
import '../../css/o/od7lr0b9p.css';
import '../../css/p/p5f8ipeea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lxc6phcbm wm-k"/><path class="o4pm3u69d wm-k"/><path class="po_8njggz wm-k"/><path class="wm-shadow wubj_kbpw"/><path class="d04ezk9jt wm-shine"/><path class="od7lr0b9p wm-shine"/><path class="p5f8ipeea wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:notepad-text"} {...others} />);
}

export default Component;

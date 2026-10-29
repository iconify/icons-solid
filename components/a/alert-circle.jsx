import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x91zhwbgw.css';
import '../../css/z/zgqw7ac9w.css';
import '../../css/u/uuks--byz.css';
import '../../css/j/j172a0b6v.css';
import '../../css/a/apbauab3q.css';
import '../../css/k/kutehtosi.css';
import '../../css/e/e_ah-nbvx.css';
import '../../css/m/m26dx0b5n.css';
import '../../css/b/b2qpoxsjo.css';
import '../../css/l/lln180bqs.css';
import '../../css/q/qlxv6ab6x.css';
import '../../css/r/r3xhrrwvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow x91zhwbgw"/><path class="wm-shadow zgqw7ac9w"/><path class="uuks--byz"/><path class="j172a0b6v"/><path class="apbauab3q"/><path class="kutehtosi"/><path class="e_ah-nbvx wm-shine"/><path class="m26dx0b5n wm-shine"/><path class="b2qpoxsjo"/><path class="lln180bqs"/><path class="qlxv6ab6x"/><path class="r3xhrrwvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:alert-circle"} {...others} />);
}

export default Component;

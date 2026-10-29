import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x91zhwbgw.css';
import '../../css/z/zgqw7ac9w.css';
import '../../css/s/swhqhjahz.css';
import '../../css/j/j172a0b6v.css';
import '../../css/a/apbauab3q.css';
import '../../css/k/kutehtosi.css';
import '../../css/e/e_ah-nbvx.css';
import '../../css/m/m26dx0b5n.css';
import '../../css/b/b2qpoxsjo.css';
import '../../css/v/vzi7qq7jg.css';
import '../../css/e/el2fm5jkj.css';
import '../../css/n/nfc-q9bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow x91zhwbgw"/><path class="wm-shadow zgqw7ac9w"/><path class="swhqhjahz"/><path class="j172a0b6v"/><path class="apbauab3q"/><path class="kutehtosi"/><path class="e_ah-nbvx wm-shine"/><path class="m26dx0b5n wm-shine"/><path class="b2qpoxsjo"/><path class="vzi7qq7jg"/><path class="el2fm5jkj"/><path class="nfc-q9bjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:circle-chevron-down"} {...others} />);
}

export default Component;

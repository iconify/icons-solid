import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y-pxvkb2n.css';
import '../../css/r/rf40jiw5i.css';
import '../../css/p/plpfutbat.css';
import '../../css/b/b6wecy-ij.css';
import '../../css/e/elxa067pa.css';
import '../../css/h/hhf91o1sn.css';
import '../../css/u/un96ahbjc.css';
import '../../css/h/hl3upj_qm.css';
import '../../css/h/h46vjcb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow y-pxvkb2n"/><path class="rf40jiw5i"/><path class="plpfutbat"/><path class="b6wecy-ij"/><path class="elxa067pa wm-shine"/><path class="hhf91o1sn wm-s"/><path class="un96ahbjc wm-s"/><path class="hl3upj_qm wm-s"/><path class="h46vjcb2b wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:phone-outgoing"} {...others} />);
}

export default Component;

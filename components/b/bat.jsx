import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6aekdb0r.css';
import '../../css/b/beu1wbcon.css';
import '../../css/l/lrd5hoo0a.css';
import '../../css/r/rtgn-2gao.css';
import '../../css/g/gir58ybfx.css';
import '../../css/d/dac5gkbjk.css';
import '../../css/h/halqzzssi.css';
import '../../css/d/dgjecgl0c.css';
import '../../css/h/hnl3mu54v.css';
import '../../css/h/hjpnpks0n.css';
import '../../css/b/b-m8lacff.css';
import '../../css/r/rx_tztb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b6aekdb0r wm-k"/><path class="beu1wbcon wm-k"/><path class="lrd5hoo0a wm-k"/><path class="rtgn-2gao wm-shine"/><path class="gir58ybfx wm-k"/><path class="dac5gkbjk wm-k"/><path class="halqzzssi wm-k"/><path class="dgjecgl0c wm-shine"/><path class="hnl3mu54v wm-a"/><path class="hjpnpks0n wm-a"/><path class="b-m8lacff wm-a"/><path class="rx_tztb9z wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bat"} {...others} />);
}

export default Component;

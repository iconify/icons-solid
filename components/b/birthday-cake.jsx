import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks5xz5b6f.css';
import '../../css/t/t8wl_3fwd.css';
import '../../css/l/ljvmkqb2p.css';
import '../../css/v/vi6a9mbya.css';
import '../../css/w/wf8ok62ws.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/ipp6gmbys.css';
import '../../css/d/db2os2_0v.css';
import '../../css/g/gqpfcilqh.css';
import '../../css/p/prkwpgbce.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ks5xz5b6f"/><path class="t8wl_3fwd"/><path class="ljvmkqb2p"/><circle class="vi6a9mbya"/><path class="wf8ok62ws"/><g class="ij2x_72vy"><circle class="ipp6gmbys"/><path class="db2os2_0v"/><path class="gqpfcilqh"/><path class="prkwpgbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:birthday-cake"} {...others} />);
}

export default Component;

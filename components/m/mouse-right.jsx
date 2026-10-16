import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vmjl2443q.css';
import '../../css/m/m_pyhpjsz.css';
import '../../css/k/k8v0mpbpn.css';
import '../../css/r/rpsnpuyag.css';
import '../../css/n/ng58m8ixe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vmjl2443q"/><path class="m_pyhpjsz"/><path class="k8v0mpbpn"/><rect class="rpsnpuyag"/><path class="ng58m8ixe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-right"} {...others} />);
}

export default Component;

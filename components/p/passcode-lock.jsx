import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fw09mebor.css';
import '../../css/g/gozd_acmt.css';
import '../../css/q/q0dugcn8n.css';
import '../../css/t/tpnvenbbb.css';
import '../../css/p/pbdi39bau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fw09mebor"/><path class="gozd_acmt"/><path class="q0dugcn8n"/><rect class="tpnvenbbb"/><path class="pbdi39bau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:passcode-lock"} {...others} />);
}

export default Component;

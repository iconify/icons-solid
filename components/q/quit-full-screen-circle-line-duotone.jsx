import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qu7_qcjgl.css';
import '../../css/i/ip3qm20ze.css';
import '../../css/k/kr99ulpjv.css';
import '../../css/u/u66s-fbqm.css';
import '../../css/d/doy9q4b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qu7_qcjgl"/><path class="ip3qm20ze"/><path class="kr99ulpjv"/><path class="u66s-fbqm"/><circle class="doy9q4b5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-circle-line-duotone"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/amrleybkj.css';
import '../../css/t/tu8z24q4c.css';
import '../../css/m/mzol8ljjp.css';
import '../../css/q/q8g2gcb5e.css';
import '../../css/v/vz0_31kyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="amrleybkj"/><path class="tu8z24q4c wm-k"/><path class="mzol8ljjp wm-a"/><path class="q8g2gcb5e wm-k"/><path class="vz0_31kyq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-input-sketch"} {...others} />);
}

export default Component;

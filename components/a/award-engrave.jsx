import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x_bxa3bco.css';
import '../../css/m/mdild8e_v.css';
import '../../css/a/aciylybvm.css';
import '../../css/n/n9em5fasb.css';
import '../../css/o/oc_qcrgei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k x_bxa3bco"/><path class="mdild8e_v wm-a"/><path class="aciylybvm wm-shadow"/><path class="n9em5fasb wm-k"/><path class="oc_qcrgei wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:award-engrave"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cony-fkuc.css';
import '../../css/o/opbxnxbxe.css';
import '../../css/u/uex_d5bbi.css';
import '../../css/w/w3sy0kb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cony-fkuc"/><path class="opbxnxbxe wm-a"/><path class="uex_d5bbi wm-k"/><path class="w3sy0kb_n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:weight-sketch"} {...others} />);
}

export default Component;

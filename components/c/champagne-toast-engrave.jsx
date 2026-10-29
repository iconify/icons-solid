import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mykchfbxc.css';
import '../../css/f/foi40nbza.css';
import '../../css/l/luqu_mfyf.css';
import '../../css/s/s4uk5n7uw.css';
import '../../css/h/hnxobrbrn.css';
import '../../css/o/ohlg0wbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mykchfbxc wm-k"/><path class="foi40nbza wm-s"/><path class="luqu_mfyf wm-shadow"/><path class="s4uk5n7uw wm-k"/><path class="hnxobrbrn wm-a"/><path class="ohlg0wbaj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:champagne-toast-engrave"} {...others} />);
}

export default Component;

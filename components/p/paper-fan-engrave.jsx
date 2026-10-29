import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hduqftrhx.css';
import '../../css/v/viydr2vqu.css';
import '../../css/l/lxc7q5bue.css';
import '../../css/o/opucl5yls.css';
import '../../css/i/i770uqt7u.css';
import '../../css/l/lbsx3ub7i.css';
import '../../css/f/fvbk-8bio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hduqftrhx wm-k"/><path class="viydr2vqu wm-s"/><path class="lxc7q5bue wm-shadow"/><path class="opucl5yls wm-k"/><path class="i770uqt7u wm-a"/><path class="lbsx3ub7i wm-k"/><path class="fvbk-8bio wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paper-fan-engrave"} {...others} />);
}

export default Component;

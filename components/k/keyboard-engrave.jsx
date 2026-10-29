import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uw8k2ccxn.css';
import '../../css/n/naiqmubbw.css';
import '../../css/m/m2gtrdezm.css';
import '../../css/a/a_-f_rbjf.css';
import '../../css/n/n0-6-ccsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uw8k2ccxn wm-k"/><path class="naiqmubbw wm-k"/><path class="m2gtrdezm wm-shadow"/><path class="a_-f_rbjf wm-k"/><path class="n0-6-ccsd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:keyboard-engrave"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gvmf_2bye.css';
import '../../css/u/up_uepidw.css';
import '../../css/i/ihhg1ni_f.css';
import '../../css/m/m4_wvpbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gvmf_2bye wm-deco"/><path class="up_uepidw wm-k"/><path class="ihhg1ni_f wm-k"/><path class="m4_wvpbdd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:door-open-sketch"} {...others} />);
}

export default Component;

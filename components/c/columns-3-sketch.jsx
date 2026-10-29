import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d_pf6lbxf.css';
import '../../css/f/fcut-hbnn.css';
import '../../css/f/fyw5h8ktk.css';
import '../../css/q/qllxogbek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d_pf6lbxf"/><path class="fcut-hbnn wm-a"/><path class="fyw5h8ktk wm-k"/><path class="qllxogbek wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:columns-3-sketch"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m7_vfacpm.css';
import '../../css/u/uhvpqyzxp.css';
import '../../css/s/s-zhlbbmg.css';
import '../../css/a/at8xfhyjc.css';
import '../../css/x/x_y_7lbhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m7_vfacpm"/><path class="uhvpqyzxp wm-k"/><path class="s-zhlbbmg wm-a"/><path class="at8xfhyjc wm-k"/><path class="wm-a x_y_7lbhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-pin-check-sketch"} {...others} />);
}

export default Component;

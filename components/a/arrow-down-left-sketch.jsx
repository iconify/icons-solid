import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u-eo-eb_s.css';
import '../../css/s/sov9jobbh.css';
import '../../css/b/bd3wwabse.css';
import '../../css/m/mugdapbyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u-eo-eb_s wm-k"/><path class="sov9jobbh wm-a"/><path class="bd3wwabse wm-k"/><path class="mugdapbyt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-down-left-sketch"} {...others} />);
}

export default Component;

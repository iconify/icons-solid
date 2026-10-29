import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1pv_sbbk.css';
import '../../css/r/ra2whvb7t.css';
import '../../css/i/iz66ytb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l1pv_sbbk wm-k"/><path class="ra2whvb7t wm-k"/><path class="iz66ytb_v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:regex-sketch"} {...others} />);
}

export default Component;

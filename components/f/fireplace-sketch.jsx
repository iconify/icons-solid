import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u2_r0jbnx.css';
import '../../css/x/xx6wz-ltc.css';
import '../../css/h/hucbiosco.css';
import '../../css/w/w2kg8tbni.css';
import '../../css/r/rxp9x9b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u2_r0jbnx"/><path class="wm-k xx6wz-ltc"/><path class="hucbiosco wm-a"/><path class="w2kg8tbni wm-k"/><path class="rxp9x9b_t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fireplace-sketch"} {...others} />);
}

export default Component;

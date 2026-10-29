import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pnk4cfbhi.css';
import '../../css/s/s7iqi01xc.css';
import '../../css/d/dyl9j_8su.css';
import '../../css/e/e61c4pwgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pnk4cfbhi wm-k"/><path class="s7iqi01xc wm-shadow"/><path class="dyl9j_8su wm-k"/><path class="e61c4pwgm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tag-engrave"} {...others} />);
}

export default Component;

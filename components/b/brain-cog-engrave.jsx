import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sasjgvbej.css';
import '../../css/c/cb8204bna.css';
import '../../css/s/s8f-ewbkh.css';
import '../../css/l/lvwj8zv0y.css';
import '../../css/d/d-c_quigx.css';
import '../../css/e/ekmlpmtjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sasjgvbej wm-k"/><path class="cb8204bna wm-s"/><path class="s8f-ewbkh wm-shadow"/><path class="lvwj8zv0y wm-k"/><path class="d-c_quigx wm-a"/><path class="ekmlpmtjg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-cog-engrave"} {...others} />);
}

export default Component;

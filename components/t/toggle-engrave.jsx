import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pi05i1bnr.css';
import '../../css/r/rz3zm32es.css';
import '../../css/z/z2i45qmri.css';
import '../../css/p/pjqa07bbp.css';
import '../../css/s/skqzgzjwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pi05i1bnr wm-k"/><path class="rz3zm32es wm-a"/><path class="wm-shadow z2i45qmri"/><path class="pjqa07bbp wm-k"/><path class="skqzgzjwd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toggle-engrave"} {...others} />);
}

export default Component;

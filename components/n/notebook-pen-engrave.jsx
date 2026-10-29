import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/srrfs-k_u.css';
import '../../css/r/rxu9rsydk.css';
import '../../css/l/ledkdvbfc.css';
import '../../css/x/xjk38nbdp.css';
import '../../css/u/u8djjoheg.css';
import '../../css/m/mqfx5dq5o.css';
import '../../css/w/w9pcj6b5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="srrfs-k_u wm-k"/><path class="rxu9rsydk wm-a"/><path class="ledkdvbfc wm-s"/><path class="wm-shadow xjk38nbdp"/><path class="u8djjoheg wm-k"/><path class="mqfx5dq5o wm-a"/><path class="w9pcj6b5h wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notebook-pen-engrave"} {...others} />);
}

export default Component;

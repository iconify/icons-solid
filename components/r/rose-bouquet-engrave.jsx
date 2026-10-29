import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tcfyyhb_y.css';
import '../../css/f/fem6y1b9n.css';
import '../../css/q/q8pb0ns0n.css';
import '../../css/n/n_vnbxbgj.css';
import '../../css/o/ojj06wbbq.css';
import '../../css/u/u6obsfyth.css';
import '../../css/s/s3el9pbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tcfyyhb_y wm-k"/><path class="fem6y1b9n wm-a"/><path class="q8pb0ns0n wm-shadow"/><path class="n_vnbxbgj wm-k"/><path class="ojj06wbbq wm-k"/><path class="u6obsfyth wm-a"/><path class="s3el9pbwf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rose-bouquet-engrave"} {...others} />);
}

export default Component;

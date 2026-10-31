import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gi8hlbc5n.css';
import '../../css/p/pndqn4btg.css';
import '../../css/c/c6srsj_er.css';
import '../../css/i/ib0cyf_nv.css';
import '../../css/a/avmun2qkp.css';
import '../../css/w/w_3nybcsq.css';
import '../../css/f/foavzpbky.css';
import '../../css/w/ws7ytw5sd.css';
import '../../css/h/hqxaz61as.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gi8hlbc5n wm-k"/><path class="pndqn4btg wm-s"/><path class="c6srsj_er wm-deco"/><path class="ib0cyf_nv wm-k"/><path class="avmun2qkp wm-k"/><path class="w_3nybcsq wm-s"/><path class="foavzpbky wm-shadow"/><path class="wm-shine ws7ytw5sd"/><path class="hqxaz61as wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:smartphone-message"} {...others} />);
}

export default Component;

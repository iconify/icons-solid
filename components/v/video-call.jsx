import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ap_mgwbzz.css';
import '../../css/m/myi529bof.css';
import '../../css/x/xnz2_4b4h.css';
import '../../css/u/u5xld4vfo.css';
import '../../css/n/n3fkpobon.css';
import '../../css/o/o0885kb3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ap_mgwbzz wm-shadow"/><path class="myi529bof"/><path class="xnz2_4b4h"/><path class="u5xld4vfo"/><path class="n3fkpobon"/><path class="o0885kb3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:video-call"} {...others} />);
}

export default Component;

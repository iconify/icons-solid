import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/izpiltzao.css';
import '../../css/b/bhx_bhpfu.css';
import '../../css/g/g-v_k7b2s.css';
import '../../css/s/s8pgmizvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="izpiltzao"/><path class="bhx_bhpfu wm-a"/><path class="g-v_k7b2s wm-k"/><path class="s8pgmizvv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wink-sketch"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uu-llwbjg.css';
import '../../css/s/s_8ird94j.css';
import '../../css/k/ki4c-rmpi.css';
import '../../css/v/vsn4cuk_g.css';
import '../../css/w/w0k34vd7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uu-llwbjg"/><path class="s_8ird94j wm-k"/><path class="ki4c-rmpi wm-a"/><path class="vsn4cuk_g wm-k"/><path class="w0k34vd7f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hammer-sketch"} {...others} />);
}

export default Component;

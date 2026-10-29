import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/or3g_fb0y.css';
import '../../css/o/o_52rxb2b.css';
import '../../css/w/whx2ksbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="or3g_fb0y"/><path class="o_52rxb2b wm-k"/><path class="whx2ksbdp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-hail-sketch"} {...others} />);
}

export default Component;

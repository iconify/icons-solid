import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lotq6lz7v.css';
import '../../css/f/f68n4ubpd.css';
import '../../css/w/wushw_bfm.css';
import '../../css/f/f_a_1pbso.css';
import '../../css/h/hk66w8b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lotq6lz7v"/><path class="f68n4ubpd wm-k"/><path class="wm-a wushw_bfm"/><path class="f_a_1pbso wm-k"/><path class="hk66w8b5e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:external-link-sketch"} {...others} />);
}

export default Component;

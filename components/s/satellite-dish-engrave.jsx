import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/up9srbczz.css';
import '../../css/h/h-hhqcdkb.css';
import '../../css/v/vt8a-vb3p.css';
import '../../css/g/gxt0l0bjk.css';
import '../../css/y/yk6pw_bfq.css';
import '../../css/k/kro82vbrq.css';
import '../../css/g/g6o8xobrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="up9srbczz wm-k"/><path class="h-hhqcdkb wm-a"/><path class="vt8a-vb3p wm-s"/><path class="gxt0l0bjk wm-shadow"/><path class="wm-k yk6pw_bfq"/><path class="kro82vbrq wm-a"/><path class="g6o8xobrr wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-dish-engrave"} {...others} />);
}

export default Component;

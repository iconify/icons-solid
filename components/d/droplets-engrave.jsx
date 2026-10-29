import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m19lpcb0d.css';
import '../../css/t/tf6q4k9qf.css';
import '../../css/p/puozkrmyl.css';
import '../../css/u/urb3kpbld.css';
import '../../css/i/idk2wtbbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m19lpcb0d wm-k"/><path class="tf6q4k9qf wm-a"/><path class="puozkrmyl wm-shadow"/><path class="urb3kpbld wm-k"/><path class="idk2wtbbi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:droplets-engrave"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dn3jvaciq.css';
import '../../css/u/u_-s9s-iw.css';
import '../../css/n/nhhvnqb6p.css';
import '../../css/x/xvqt18b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dn3jvaciq wm-k"/><path class="u_-s9s-iw wm-a"/><path class="nhhvnqb6p wm-k"/><path class="wm-a xvqt18b2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scissors-sketch"} {...others} />);
}

export default Component;

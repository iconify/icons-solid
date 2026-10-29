import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z5tp3-dsg.css';
import '../../css/m/m4qzajbec.css';
import '../../css/t/t1uuefuzf.css';
import '../../css/b/bb7znibim.css';
import '../../css/b/b1z0d6brh.css';
import '../../css/i/ieced1b-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k z5tp3-dsg"/><path class="m4qzajbec wm-a"/><path class="t1uuefuzf wm-shadow"/><path class="bb7znibim wm-k"/><path class="b1z0d6brh wm-k"/><path class="ieced1b-r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:diya-engrave"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pbbswkb8p.css';
import '../../css/t/totmvqulo.css';
import '../../css/a/apbxdlbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pbbswkb8p"/><path class="totmvqulo wm-shadow"/><path class="apbxdlbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:voicemail-engrave"} {...others} />);
}

export default Component;

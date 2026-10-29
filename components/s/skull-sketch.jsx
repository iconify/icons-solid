import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/ftjlt04ey.css';
import '../../css/i/inirm0b4k.css';
import '../../css/p/poqevy83a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ftjlt04ey"/><path class="inirm0b4k wm-k"/><path class="poqevy83a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:skull-sketch"} {...others} />);
}

export default Component;

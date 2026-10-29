import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z6ruasb5p.css';
import '../../css/b/b-gg86l-v.css';
import '../../css/n/n1d3l-bkk.css';
import '../../css/t/t93sacb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k z6ruasb5p"/><path class="b-gg86l-v wm-a"/><path class="n1d3l-bkk wm-k"/><path class="t93sacb0x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wheat-sketch"} {...others} />);
}

export default Component;

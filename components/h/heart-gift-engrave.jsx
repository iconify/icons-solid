import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h13pefb2x.css';
import '../../css/s/sliiisb3g.css';
import '../../css/h/hgn-414_h.css';
import '../../css/w/wer_ogb9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h13pefb2x"/><path class="sliiisb3g wm-shadow"/><path class="hgn-414_h"/><path class="wer_ogb9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-gift-engrave"} {...others} />);
}

export default Component;

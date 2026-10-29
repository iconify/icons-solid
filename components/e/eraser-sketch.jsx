import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fj1zumbpq.css';
import '../../css/a/ae6nlhxzs.css';
import '../../css/u/u16p8smcp.css';
import '../../css/t/tn19keisw.css';
import '../../css/z/z2zduwb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fj1zumbpq"/><path class="ae6nlhxzs wm-k"/><path class="u16p8smcp wm-k"/><path class="tn19keisw wm-a"/><path class="z2zduwb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eraser-sketch"} {...others} />);
}

export default Component;

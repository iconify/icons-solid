import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eupdw6hmz.css';
import '../../css/p/pzr4au_be.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eupdw6hmz"/><path class="pzr4au_be"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paperclip-sketch"} {...others} />);
}

export default Component;

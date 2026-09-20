import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sx--pgn-w.css';
import '../../css/s/saazrjbxr.css';
import '../../css/c/ck0bcwbmq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="sx--pgn-w"/><path class="saazrjbxr"/><path class="ck0bcwbmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:telegram"} {...others} />);
}

export default Component;

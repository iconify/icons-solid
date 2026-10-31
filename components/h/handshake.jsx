import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c2-vhivfe.css';
import '../../css/c/c9ar02bkm.css';
import '../../css/g/gxrw9vbxr.css';
import '../../css/f/f4or7pb1c.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="c2-vhivfe"/><path class="c9ar02bkm wm-shine"/><path class="gxrw9vbxr wm-k"/><path class="f4or7pb1c wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:handshake"} {...others} />);
}

export default Component;

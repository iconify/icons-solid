import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n9qr0fb_z.css';
import '../../css/e/e73az-bbb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="n9qr0fb_z"/><path class="e73az-bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:mail-send-envelope"} {...others} />);
}

export default Component;

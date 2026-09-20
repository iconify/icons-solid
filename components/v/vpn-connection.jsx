import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w20a5nbxv.css';
import '../../css/a/arlwz6bku.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="w20a5nbxv"/><path class="arlwz6bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:vpn-connection"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qdoyozbyj.css';
import '../../css/w/wqpa7-b3w.css';
import '../../css/i/i90ppnbxa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qdoyozbyj"/><circle class="wqpa7-b3w"/><path class="i90ppnbxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-connection-network-network-server-internet-ethernet"} {...others} />);
}

export default Component;

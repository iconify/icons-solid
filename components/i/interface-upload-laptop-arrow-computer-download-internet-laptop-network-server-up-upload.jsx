import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pfnbku-4f.css';
import '../../css/t/tvvrs1t7g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="pfnbku-4f"/><path class="tvvrs1t7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-upload-laptop-arrow-computer-download-internet-laptop-network-server-up-upload"} {...others} />);
}

export default Component;

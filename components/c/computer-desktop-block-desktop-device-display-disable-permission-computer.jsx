import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lqxpnhbbd.css';
import '../../css/v/vs6v5wbbc.css';
import '../../css/z/zddet0_on.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="lqxpnhbbd"/><circle class="vs6v5wbbc"/><path class="zddet0_on"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-desktop-block-desktop-device-display-disable-permission-computer"} {...others} />);
}

export default Component;

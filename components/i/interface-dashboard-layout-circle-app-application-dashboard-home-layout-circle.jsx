import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s7k_w0bmy.css';
import '../../css/p/p29514frd.css';
import '../../css/s/s74f9qbtc.css';
import '../../css/v/vnefgbc0t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="s7k_w0bmy"/><circle class="p29514frd"/><circle class="s74f9qbtc"/><circle class="vnefgbc0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-dashboard-layout-circle-app-application-dashboard-home-layout-circle"} {...others} />);
}

export default Component;

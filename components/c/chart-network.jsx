import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qp38dxbcy.css';
import '../../css/o/orw_fqitx.css';
import '../../css/c/cw36_6mco.css';
import '../../css/f/ffjmppbay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qp38dxbcy"/><path class="orw_fqitx wm-k"/><path class="cw36_6mco wm-a"/><path class="ffjmppbay wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-network"} {...others} />);
}

export default Component;

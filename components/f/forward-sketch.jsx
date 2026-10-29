import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x8n4opbkv.css';
import '../../css/s/sqylgf2bu.css';
import '../../css/b/b_8ozvbnm.css';
import '../../css/v/vv7a3663y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k x8n4opbkv"/><path class="sqylgf2bu wm-a"/><path class="b_8ozvbnm wm-k"/><path class="vv7a3663y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:forward-sketch"} {...others} />);
}

export default Component;

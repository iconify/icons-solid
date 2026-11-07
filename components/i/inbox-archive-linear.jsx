import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/x/xyrhgtb_n.css';
import '../../css/l/lz7s8lgsy.css';
import '../../css/p/p7dcq8xrw.css';
import '../../css/s/s4echkz_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="xyrhgtb_n"/><path class="lz7s8lgsy"/><path class="p7dcq8xrw"/><path class="s4echkz_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-archive-linear"} {...others} />);
}

export default Component;

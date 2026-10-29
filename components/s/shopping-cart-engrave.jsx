import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f19a-bbhg.css';
import '../../css/k/k60dwsbzs.css';
import '../../css/w/wjvpugbbq.css';
import '../../css/y/ytznpnb1t.css';
import '../../css/e/euee9wbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f19a-bbhg wm-k"/><path class="k60dwsbzs wm-a"/><path class="wjvpugbbq wm-shadow"/><path class="wm-k ytznpnb1t"/><path class="euee9wbaf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-cart-engrave"} {...others} />);
}

export default Component;

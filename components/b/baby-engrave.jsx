import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/seejxhb6k.css';
import '../../css/u/uisobyeyf.css';
import '../../css/w/wc_hv_34n.css';
import '../../css/y/y23w8kzbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="seejxhb6k"/><path class="uisobyeyf wm-shadow"/><path class="wc_hv_34n"/><path class="y23w8kzbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baby-engrave"} {...others} />);
}

export default Component;

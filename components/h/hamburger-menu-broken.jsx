import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h4yzaxyri.css';
import '../../css/z/zht_dpbhk.css';
import '../../css/z/zj3_xl2hb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h4yzaxyri"/><path class="zht_dpbhk"/><path class="zj3_xl2hb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hamburger-menu-broken"} {...others} />);
}

export default Component;

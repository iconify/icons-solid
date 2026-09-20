import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tun-vsp7b.css';
import '../../css/l/lb_uwtm7d.css';
import '../../css/z/zotv3qu_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tun-vsp7b"/><path class="lb_uwtm7d"/><path class="zotv3qu_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-square-line-duotone"} {...others} />);
}

export default Component;

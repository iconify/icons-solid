import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tun-vsp7b.css';
import '../../css/l/lb_uwtm7d.css';
import '../../css/g/gfwzmm8cw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tun-vsp7b"/><path class="lb_uwtm7d"/><path class="gfwzmm8cw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-square-linear"} {...others} />);
}

export default Component;

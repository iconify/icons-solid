import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yl_mu4b1o.css';
import '../../css/w/w6e2zkbwg.css';
import '../../css/f/fx41sqb4j.css';
import '../../css/i/ivkn1_o3k.css';
import '../../css/a/ad7u_vrxt.css';
import '../../css/r/r8kz99blj.css';
import '../../css/k/k2_ouvben.css';
import '../../css/f/fwh__yjbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yl_mu4b1o"/><path class="w6e2zkbwg"/><path class="fx41sqb4j"/><path class="ivkn1_o3k"/><path class="ad7u_vrxt wm-a"/><path class="r8kz99blj"/><path class="k2_ouvben wm-a"/><path class="fwh__yjbc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-wheelchair-duo"} {...others} />);
}

export default Component;

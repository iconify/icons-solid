import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_geh1b4c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/khi7kz-fr.css';
import '../../css/f/fhijb1c4d.css';
import '../../css/x/xdc556bol.css';
import '../../css/h/hfirngbmd.css';
import '../../css/x/xc1ugqj_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_geh1b4c secondary"/><g class="dt0cm9dhy primary"><path class="khi7kz-fr"/><path class="fhijb1c4d"/><path class="xdc556bol"/><path class="hfirngbmd"/><path class="xc1ugqj_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gate-xor-duo"} {...others} />);
}

export default Component;

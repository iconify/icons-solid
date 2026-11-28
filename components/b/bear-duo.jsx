import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_fkuweik.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uf9mrilrg.css';
import '../../css/h/hjfln3bdh.css';
import '../../css/x/x61oj130z.css';
import '../../css/n/n4db_ib3a.css';
import '../../css/a/a_luiabyy.css';
import '../../css/y/y9seu5btc.css';
import '../../css/e/e52-97bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_fkuweik secondary"/><g class="dt0cm9dhy primary"><path class="uf9mrilrg"/><path class="hjfln3bdh"/><path class="x61oj130z"/><path class="n4db_ib3a"/><path class="a_luiabyy"/><path class="y9seu5btc"/><path class="e52-97bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bear-duo"} {...others} />);
}

export default Component;

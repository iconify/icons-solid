import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/p/plleucchv.css';
import '../../css/e/elvzabbqc.css';
import '../../css/f/f56klccxj.css';
import '../../css/z/zzie-ukbc.css';
import '../../css/q/q-mj-cczu.css';
import '../../css/y/ye-vfmbux.css';
import '../../css/z/zlejbku2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><path class="t_ev7s-sv"/><g transform="translate(2.063 2.813)" class="l5y23ru5w"><circle class="plleucchv"/><circle class="elvzabbqc"/><circle class="f56klccxj"/><circle class="zzie-ukbc"/><path class="q-mj-cczu"/><path class="ye-vfmbux"/><path class="zlejbku2h"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:datastream"} {...others} />);
}

export default Component;

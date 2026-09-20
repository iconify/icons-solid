import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/d/dkhi1wb0v.css';
import '../../css/v/v_1iyab3s.css';
import '../../css/c/c-urnpbob.css';
import '../../css/x/xt_rl2bnl.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="dkhi1wb0v"/><path class="v_1iyab3s"/><path class="c-urnpbob"/><path class="xt_rl2bnl"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-greece"} {...others} />);
}

export default Component;

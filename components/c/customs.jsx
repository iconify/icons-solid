import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3hy2ebyw.css';
import '../../css/q/qblnoz2rl.css';
import '../../css/r/r3t623bqr.css';
import '../../css/g/gm30x-bqh.css';
import '../../css/e/exjtulbmb.css';
import '../../css/k/k2wgqpnpw.css';
import '../../css/x/xx7by6bxj.css';
import '../../css/q/q_x0dinky.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x3hy2ebyw"/><path class="qblnoz2rl"/><circle class="r3t623bqr"/><path class="gm30x-bqh"/><path class="exjtulbmb"/><path class="k2wgqpnpw"/><path class="xx7by6bxj"/><path class="q_x0dinky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:customs"} {...others} />);
}

export default Component;

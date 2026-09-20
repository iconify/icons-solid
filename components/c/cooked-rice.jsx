import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnmx_cb2j.css';
import '../../css/c/cp0s25bhg.css';
import '../../css/c/c6g0moe9l.css';
import '../../css/q/q5utbpbsp.css';
import '../../css/v/vuowepbxx.css';
import '../../css/y/y3cpnr_-q.css';
import '../../css/c/cpyrssbbm.css';
import '../../css/n/ndo_p8blp.css';
import '../../css/q/q-nld0mkc.css';
import '../../css/v/vglsd33bb.css';
import '../../css/r/r366br-_j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hnmx_cb2j"/><path class="cp0s25bhg"/><path class="c6g0moe9l"/><path class="q5utbpbsp"/><path class="vuowepbxx"/><path class="y3cpnr_-q"/><path class="cpyrssbbm"/><path class="ndo_p8blp"/><path class="q-nld0mkc"/><path class="vglsd33bb"/><path class="r366br-_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:cooked-rice"} {...others} />);
}

export default Component;

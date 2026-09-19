import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/w/whdjtqbqz.css';
import '../../css/r/rtnwdlbne.css';
import '../../css/b/b-pwaib3j.css';
import '../../css/b/bqqb7q_qg.css';
import '../../css/m/m28yv0bnk.css';
import '../../css/q/q_3gd3bdv.css';
import '../../css/o/olypyekac.css';
import '../../css/a/ac5wnab9s.css';
import '../../css/g/gwc3qcstu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="whdjtqbqz"/><path class="rtnwdlbne"/><path class="b-pwaib3j"/><path class="bqqb7q_qg"/><path class="m28yv0bnk"/><path class="q_3gd3bdv"/><path class="olypyekac"/><path class="ac5wnab9s"/><path class="gwc3qcstu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bridge-two"} {...others} />);
}

export default Component;

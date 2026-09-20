import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znl28j2op.css';
import '../../css/t/t1186ipnq.css';
import '../../css/d/ds1zjk7oo.css';
import '../../css/q/qlqrucbwh.css';
import '../../css/u/u3ssa0b3j.css';
import '../../css/l/l88wxbbuk.css';
import '../../css/a/af4vrlb7s.css';
import '../../css/t/tkqrfxbol.css';
import '../../css/k/kx6eqccwi.css';
import '../../css/z/z3wqvux_r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="znl28j2op"/><path class="t1186ipnq"/><path class="ds1zjk7oo"/><path class="qlqrucbwh"/><path class="u3ssa0b3j"/><path class="l88wxbbuk"/><path class="af4vrlb7s"/><path class="tkqrfxbol"/><path class="kx6eqccwi"/><path class="z3wqvux_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:game-dice"} {...others} />);
}

export default Component;

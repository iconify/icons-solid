import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfaxxob_q.css';
import '../../css/u/u_g3lebpf.css';
import '../../css/l/l0p1n7ykb.css';
import '../../css/c/c3bd3nbjc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hfaxxob_q"/><path class="u_g3lebpf"/><path class="l0p1n7ykb"/><path class="c3bd3nbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-centre-48-bold"} {...others} />);
}

export default Component;

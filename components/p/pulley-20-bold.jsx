import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bux89r-yl.css';
import '../../css/m/mhz_qubgr.css';
import '../../css/b/bt7jfqbbp.css';
import '../../css/s/s4-izgb7s.css';
import '../../css/j/j9_bbbf9o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bux89r-yl"/><path class="mhz_qubgr"/><path class="bt7jfqbbp"/><path class="s4-izgb7s"/><path class="j9_bbbf9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pulley-20-bold"} {...others} />);
}

export default Component;

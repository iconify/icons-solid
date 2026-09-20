import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/j/juovah9_r.css';
import '../../css/d/d9h9h0obf.css';
import '../../css/n/n1cp27bsg.css';
import '../../css/f/fu6eqdbqo.css';
import '../../css/c/cmkyeojlu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><circle class="juovah9_r"/><circle class="d9h9h0obf"/><circle class="n1cp27bsg"/><circle class="fu6eqdbqo"/><path class="cmkyeojlu"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-china"} {...others} />);
}

export default Component;

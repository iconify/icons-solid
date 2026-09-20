import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/l/l8k5mmb-i.css';
import '../../css/g/gy_p03b3v.css';
import '../../css/e/exkbc9b_o.css';
import '../../css/x/xluusacxr.css';
import '../../css/g/g1p4lebsw.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="l8k5mmb-i"/><path class="gy_p03b3v"/><path class="exkbc9b_o"/><path class="xluusacxr"/><circle class="g1p4lebsw"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:asturian-flag"} {...others} />);
}

export default Component;

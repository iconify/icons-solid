import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptt6jccuu.css';
import '../../css/k/kbdu-acbc.css';
import '../../css/u/uhp83nbzh.css';
import '../../css/j/j-gq88blr.css';
import '../../css/p/pq0or1bxu.css';
import '../../css/u/uw68n6w9p.css';
import '../../css/m/mgxqyjy8i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ptt6jccuu"/><path class="kbdu-acbc"/><path class="uhp83nbzh"/><path class="j-gq88blr"/><path class="pq0or1bxu"/><path class="uw68n6w9p"/><path class="mgxqyjy8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:keyboardandmouse"} {...others} />);
}

export default Component;

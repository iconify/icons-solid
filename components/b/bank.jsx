import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st8db2bct.css';
import '../../css/w/wbqlirbrf.css';
import '../../css/t/txsafwbwa.css';
import '../../css/o/ovyl-pr9b.css';
import '../../css/g/gk5cqqbli.css';
import '../../css/j/j8z1oveli.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="st8db2bct"/><path class="wbqlirbrf"/><path class="txsafwbwa"/><path class="ovyl-pr9b"/><path class="gk5cqqbli"/><path class="j8z1oveli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bank"} {...others} />);
}

export default Component;

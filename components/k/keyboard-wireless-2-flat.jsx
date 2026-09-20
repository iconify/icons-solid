import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zkv446btt.css';
import '../../css/w/wxt4s-b2x.css';
import '../../css/n/nk6_eibzl.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zkv446btt"/><path class="wxt4s-b2x"/><path class="nk6_eibzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:keyboard-wireless-2-flat"} {...others} />);
}

export default Component;

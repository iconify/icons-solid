import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjshqv_ue.css';
import '../../css/w/w9wohmbtb.css';
import '../../css/z/zh1wv6ran.css';
import '../../css/a/axba5-bco.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rjshqv_ue"/><path class="w9wohmbtb"/><path class="zh1wv6ran"/><path class="axba5-bco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:dropbox"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ejc2sxbrs.css';
import '../../css/f/f2x4o5iih.css';
import '../../css/w/w76luub3a.css';
import '../../css/q/qwqveybtp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ejc2sxbrs"/><path class="f2x4o5iih"/><path clip-rule="evenodd" class="w76luub3a"/><path class="qwqveybtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:browser-multiple-window-flat"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/otrz1n7pe.css';
import '../../css/x/xhvyj69ys.css';
import '../../css/j/jvd558cyr.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="otrz1n7pe"/><path class="xhvyj69ys"/><path class="jvd558cyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:voice-mail-off-flat"} {...others} />);
}

export default Component;

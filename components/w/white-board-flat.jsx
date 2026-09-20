import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g_mc4skjc.css';
import '../../css/b/b3bqa4bnf.css';
import '../../css/e/erxplv5qz.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g_mc4skjc"/><path class="b3bqa4bnf"/><path class="erxplv5qz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:white-board-flat"} {...others} />);
}

export default Component;

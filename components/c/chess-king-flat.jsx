import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yijrflb7c.css';
import '../../css/p/pvfkiacfy.css';
import '../../css/h/h3t3w5b6q.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yijrflb7c"/><path class="pvfkiacfy"/><path class="h3t3w5b6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chess-king-flat"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xkabgyb9j.css';
import '../../css/u/urosuxb4j.css';
import '../../css/x/xc3sa6bii.css';
import '../../css/k/k_iln5sfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xkabgyb9j"/><path class="urosuxb4j"/><path class="xc3sa6bii"/><path class="k_iln5sfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:task-list-clipboard-clock"} {...others} />);
}

export default Component;

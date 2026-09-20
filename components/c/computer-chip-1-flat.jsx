import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c_j7ak3pd.css';
import '../../css/g/g4q4f6bzj.css';
import '../../css/p/p1_pxob3g.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="c_j7ak3pd"/><path class="g4q4f6bzj"/><path class="p1_pxob3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:computer-chip-1-flat"} {...others} />);
}

export default Component;

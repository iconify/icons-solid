import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r5c5j4bbq.css';
import '../../css/j/j-czlub9k.css';
import '../../css/p/pdlm26v3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r5c5j4bbq"/><path class="j-czlub9k"/><path class="pdlm26v3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cleaning-robot-vacuum"} {...others} />);
}

export default Component;

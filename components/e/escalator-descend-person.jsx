import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bmgc78bsz.css';
import '../../css/n/nasjo9_5v.css';
import '../../css/f/f0ly2e3dy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="bmgc78bsz"/><path class="nasjo9_5v"/><path class="f0ly2e3dy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:escalator-descend-person"} {...others} />);
}

export default Component;

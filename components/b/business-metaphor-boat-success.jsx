import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gxpqwabxe.css';
import '../../css/m/mn-c1gvts.css';
import '../../css/d/d82kh5btl.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gxpqwabxe"/><path class="mn-c1gvts"/><path class="d82kh5btl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-metaphor-boat-success"} {...others} />);
}

export default Component;

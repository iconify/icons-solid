import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kso8q1vbq.css';
import '../../css/g/g8hf58bbd.css';
import '../../css/a/au437wwib.css';
import '../../css/d/dlgxj6bqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="kso8q1vbq"/><path class="g8hf58bbd"/><path class="au437wwib"/><path class="dlgxj6bqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-building-outdoors"} {...others} />);
}

export default Component;

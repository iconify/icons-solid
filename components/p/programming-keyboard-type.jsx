import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pu33yvb-i.css';
import '../../css/g/g-oo9qbrr.css';
import '../../css/h/h9a9_1b9v.css';
import '../../css/y/ye-ibsbpr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pu33yvb-i"/><path class="g-oo9qbrr"/><path class="h9a9_1b9v"/><path class="ye-ibsbpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-keyboard-type"} {...others} />);
}

export default Component;

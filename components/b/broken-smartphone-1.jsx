import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o0iveosml.css';
import '../../css/x/x3gn12ylu.css';
import '../../css/o/ozkkt8zvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="o0iveosml"/><path class="x3gn12ylu"/><path class="ozkkt8zvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:broken-smartphone-1"} {...others} />);
}

export default Component;

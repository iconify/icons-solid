import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eaguzhbwz.css';
import '../../css/t/tfndbj7co.css';
import '../../css/o/o7w1_wbhx.css';
import '../../css/h/hnovqb_4l.css';
import '../../css/h/h84-17bec.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="eaguzhbwz"/><path class="tfndbj7co"/><path class="o7w1_wbhx"/><path class="hnovqb_4l"/><path class="h84-17bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:print-text"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2j135ojx.css';
import '../../css/p/px1nb10lr.css';
import '../../css/l/lmmsrqb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a2j135ojx"/><path class="px1nb10lr"/><path class="lmmsrqb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:earpods-charge"} {...others} />);
}

export default Component;

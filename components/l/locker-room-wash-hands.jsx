import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/ml9vscc8q.css';
import '../../css/i/iwxpr45qa.css';
import '../../css/k/k2yb2obuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ml9vscc8q"/><path class="iwxpr45qa"/><path class="k2yb2obuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:locker-room-wash-hands"} {...others} />);
}

export default Component;

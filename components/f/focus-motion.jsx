import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iecmi3svr.css';
import '../../css/n/n5amlrb_l.css';
import '../../css/v/vtz5mzbno.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="iecmi3svr"/><path class="n5amlrb_l"/><path class="vtz5mzbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:focus-motion"} {...others} />);
}

export default Component;

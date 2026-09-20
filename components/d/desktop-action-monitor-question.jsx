import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f8hzo4ber.css';
import '../../css/y/y98xg9blh.css';
import '../../css/y/ye_46gv7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="f8hzo4ber"/><path class="y98xg9blh"/><path class="ye_46gv7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:desktop-action-monitor-question"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w70lsgs8c.css';
import '../../css/w/wokny8d9v.css';
import '../../css/a/a5wgy1bzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="w70lsgs8c"><path class="wokny8d9v"/><path class="a5wgy1bzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:resize-arrow-retract-horizontal"} {...others} />);
}

export default Component;

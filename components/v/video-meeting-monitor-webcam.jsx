import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jd46t2bod.css';
import '../../css/v/vew6e5s0g.css';
import '../../css/u/urm07pk_y.css';
import '../../css/s/s27xxkb2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jd46t2bod"/><path class="vew6e5s0g"/><path class="urm07pk_y"/><path class="s27xxkb2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-meeting-monitor-webcam"} {...others} />);
}

export default Component;

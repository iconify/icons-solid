import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msq17g53b.css';
import '../../css/v/vcsu7_i3s.css';
import '../../css/r/rwa67obkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="msq17g53b"/><path class="vcsu7_i3s"/><path class="rwa67obkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-coaching-whistle"} {...others} />);
}

export default Component;

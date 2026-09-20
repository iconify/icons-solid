import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chez6abod.css';
import '../../css/n/np9eci1td.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="chez6abod"/><path class="np9eci1td"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:push-notification-alert-1"} {...others} />);
}

export default Component;

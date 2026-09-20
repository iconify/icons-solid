import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wz3h84b3q.css';
import '../../css/o/oivh7nbtd.css';
import '../../css/x/xm-axabdm.css';
import '../../css/m/mieg0m98o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wz3h84b3q"/><path class="oivh7nbtd"/><path class="xm-axabdm"/><path class="mieg0m98o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:text-formating-rotate-vertical"} {...others} />);
}

export default Component;

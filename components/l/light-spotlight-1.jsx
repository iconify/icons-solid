import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kofd9acei.css';
import '../../css/j/j8g5tmb9j.css';
import '../../css/g/gjwz5zrpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kofd9acei"/><path class="j8g5tmb9j"/><path class="gjwz5zrpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:light-spotlight-1"} {...others} />);
}

export default Component;

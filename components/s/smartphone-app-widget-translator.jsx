import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mdrlu0bwb.css';
import '../../css/m/ms_kxebqt.css';
import '../../css/o/oi21o8mcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mdrlu0bwb"/><path class="ms_kxebqt"/><path class="oi21o8mcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smartphone-app-widget-translator"} {...others} />);
}

export default Component;

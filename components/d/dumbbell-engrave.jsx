import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w3dl34bcg.css';
import '../../css/a/at5oncb-d.css';
import '../../css/g/gndq0ebyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w3dl34bcg"/><path class="at5oncb-d wm-shadow"/><path class="gndq0ebyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dumbbell-engrave"} {...others} />);
}

export default Component;

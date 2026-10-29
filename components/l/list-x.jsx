import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmi75ue4w.css';
import '../../css/v/vod5frf-f.css';
import '../../css/m/mapbceb2b.css';
import '../../css/x/x8wkqt3dl.css';
import '../../css/m/mbwpq7l1a.css';
import '../../css/z/zwp04vl6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qmi75ue4w wm-k"/><path class="vod5frf-f wm-k"/><path class="mapbceb2b wm-k"/><path class="wm-s x8wkqt3dl"/><path class="mbwpq7l1a wm-s"/><path class="wm-s zwp04vl6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:list-x"} {...others} />);
}

export default Component;

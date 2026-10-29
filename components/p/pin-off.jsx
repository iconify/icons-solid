import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sp_9k2bqz.css';
import '../../css/z/zf8seebbc.css';
import '../../css/z/zgenmrbhk.css';
import '../../css/x/xgn8g_bte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sp_9k2bqz wm-k"/><path class="zf8seebbc"/><path class="zgenmrbhk"/><path class="wm-s xgn8g_bte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pin-off"} {...others} />);
}

export default Component;

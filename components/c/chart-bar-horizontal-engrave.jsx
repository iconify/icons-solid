import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zkoj08ryw.css';
import '../../css/x/xgxrfebxf.css';
import '../../css/j/jjih60n0t.css';
import '../../css/s/skn8acc-z.css';
import '../../css/s/sjsppzltu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k zkoj08ryw"/><path class="wm-a xgxrfebxf"/><path class="jjih60n0t wm-shadow"/><path class="skn8acc-z wm-a"/><path class="sjsppzltu wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-horizontal-engrave"} {...others} />);
}

export default Component;

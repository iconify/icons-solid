import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6vcgxbtk.css';
import '../../css/d/dzfz432kr.css';
import '../../css/j/jadvwmbzo.css';
import '../../css/e/eo76imbih.css';
import '../../css/k/k8puj18zb.css';
import '../../css/p/peomxourz.css';
import '../../css/p/pn99a0c0l.css';
import '../../css/p/peoy9k0vx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6vcgxbtk wm-shadow"/><path class="dzfz432kr wm-k"/><path class="jadvwmbzo wm-k"/><path class="eo76imbih wm-k"/><path class="k8puj18zb wm-k"/><path class="peomxourz wm-shine"/><path class="pn99a0c0l wm-k"/><path class="peoy9k0vx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:send-horizontal"} {...others} />);
}

export default Component;

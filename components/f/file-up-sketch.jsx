import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ryjrr4bdl.css';
import '../../css/x/xmc7npbjc.css';
import '../../css/w/wltcj9ymb.css';
import '../../css/b/b7h7t_bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ryjrr4bdl"/><path class="wm-a xmc7npbjc"/><path class="wltcj9ymb wm-k"/><path class="b7h7t_bqn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-up-sketch"} {...others} />);
}

export default Component;

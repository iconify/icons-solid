import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k5ukfzb1l.css';
import '../../css/v/v3xk6yicn.css';
import '../../css/l/l7-nltbjq.css';
import '../../css/t/tstc18bcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k5ukfzb1l wm-k"/><path class="v3xk6yicn wm-a"/><path class="l7-nltbjq wm-k"/><path class="tstc18bcg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:check-check-sketch"} {...others} />);
}

export default Component;

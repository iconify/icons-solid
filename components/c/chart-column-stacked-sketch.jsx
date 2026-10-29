import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m-x3rzbsa.css';
import '../../css/e/esnzilhjg.css';
import '../../css/m/mxaffh47f.css';
import '../../css/p/pr2-gck8m.css';
import '../../css/x/xrkrxsb1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m-x3rzbsa"/><path class="esnzilhjg wm-k"/><path class="mxaffh47f wm-k"/><path class="pr2-gck8m wm-a"/><path class="wm-a xrkrxsb1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-column-stacked-sketch"} {...others} />);
}

export default Component;

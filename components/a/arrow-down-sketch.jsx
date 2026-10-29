import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bozexkkag.css';
import '../../css/w/wdmalj20d.css';
import '../../css/q/q1z_2oboi.css';
import '../../css/c/c4e2--9os.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bozexkkag wm-k"/><path class="wdmalj20d wm-a"/><path class="q1z_2oboi wm-k"/><path class="c4e2--9os wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-down-sketch"} {...others} />);
}

export default Component;

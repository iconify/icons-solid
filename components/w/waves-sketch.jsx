import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bdqapd8qi.css';
import '../../css/k/k6zc6ccgf.css';
import '../../css/w/w92r_czij.css';
import '../../css/q/q3fe9qb1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bdqapd8qi wm-k"/><path class="k6zc6ccgf wm-a"/><path class="w92r_czij wm-k"/><path class="q3fe9qb1y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:waves-sketch"} {...others} />);
}

export default Component;

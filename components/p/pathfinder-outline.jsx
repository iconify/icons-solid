import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hhdsr1m_k.css';
import '../../css/i/ijy9h-xoq.css';
import '../../css/n/nwezj1qqd.css';
import '../../css/i/irjzw_e-l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="hhdsr1m_k"/><path class="ijy9h-xoq"/><path class="nwezj1qqd"/><path class="irjzw_e-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pathfinder-outline"} {...others} />);
}

export default Component;

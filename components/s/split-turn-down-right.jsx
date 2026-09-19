import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/q9_aebbll.css';
import '../../css/x/xrrp2vbhl.css';
import '../../css/n/ndgf8g0be.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="q9_aebbll"/><circle transform="rotate(-90 13 8.944)" class="xrrp2vbhl"/><path class="ndgf8g0be"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:split-turn-down-right"} {...others} />);
}

export default Component;

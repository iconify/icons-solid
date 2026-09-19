import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vq3pbhbzo.css';
import '../../css/u/u_erkqblh.css';
import '../../css/h/hxiqiybia.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="vq3pbhbzo"/><path class="u_erkqblh"/><circle transform="rotate(90 35 39)" class="hxiqiybia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:u-turn-down"} {...others} />);
}

export default Component;

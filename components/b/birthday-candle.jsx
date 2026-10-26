import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uu_2899wi.css';
import '../../css/p/p-uk8gv3a.css';
import '../../css/c/ccqewbl1g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="uu_2899wi"/><path class="p-uk8gv3a"/><path class="ccqewbl1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:birthday-candle"} {...others} />);
}

export default Component;

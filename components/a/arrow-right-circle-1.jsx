import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wylhjtbhs.css';
import '../../css/b/bmvklbcnm.css';
import '../../css/t/t97umzbjk.css';
import '../../css/x/x0-01rbgq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wylhjtbhs"/><path clip-rule="evenodd" class="bmvklbcnm"/><path class="t97umzbjk"/><path clip-rule="evenodd" class="x0-01rbgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:arrow-right-circle-1"} {...others} />);
}

export default Component;

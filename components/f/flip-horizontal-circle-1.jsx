import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/ggamq8hbq.css';
import '../../css/n/n0al0ac-d.css';
import '../../css/y/y5exvutsk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ggamq8hbq"/><path class="n0al0ac-d"/><path class="y5exvutsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:flip-horizontal-circle-1"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yjho-gkco.css';
import '../../css/k/kkswoe92s.css';
import '../../css/q/q7s0-xbhn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yjho-gkco"/><path class="kkswoe92s"/><path class="q7s0-xbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:database-server-3"} {...others} />);
}

export default Component;

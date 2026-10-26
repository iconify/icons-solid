import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/srmdpobsc.css';
import '../../css/m/mwt3iibvh.css';
import '../../css/l/lne6h5boh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="srmdpobsc"/><path class="mwt3iibvh"/><path class="lne6h5boh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:christmas-ornament"} {...others} />);
}

export default Component;

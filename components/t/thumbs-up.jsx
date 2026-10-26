import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/p71ausbip.css';
import '../../css/x/x48i99bgh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="p71ausbip"/><path class="x48i99bgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:thumbs-up"} {...others} />);
}

export default Component;

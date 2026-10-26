import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vpwrufh5w.css';
import '../../css/q/qx12gmrax.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="vpwrufh5w"/><path class="qx12gmrax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:maple-leaf"} {...others} />);
}

export default Component;

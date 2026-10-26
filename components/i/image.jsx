import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uhsi68kyl.css';
import '../../css/k/kmh9znz9n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="uhsi68kyl"/><path class="kmh9znz9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:image"} {...others} />);
}

export default Component;

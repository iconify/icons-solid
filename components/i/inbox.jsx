import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/st0-37bed.css';
import '../../css/h/hwytr3k7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="st0-37bed"/><path class="hwytr3k7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:inbox"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/f/f8tud181n.css';
import '../../css/v/vsneyvb8b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="f8tud181n"/><path class="vsneyvb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:info"} {...others} />);
}

export default Component;

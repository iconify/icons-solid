import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/u7-2f7b1n.css';
import '../../css/e/e9rv-u_7y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="u7-2f7b1n"/><path class="e9rv-u_7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:snowman"} {...others} />);
}

export default Component;

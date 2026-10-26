import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/bfegwccue.css';
import '../../css/e/e-u0agotz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="bfegwccue"/><path class="e-u0agotz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:butterfly"} {...others} />);
}

export default Component;

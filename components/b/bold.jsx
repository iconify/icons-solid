import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/cmrfomvxm.css';
import '../../css/i/i6egbobxc.css';
import '../../css/p/p6yhzeble.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="cmrfomvxm"/><path class="i6egbobxc"/><path class="p6yhzeble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:bold"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/p/pvig9y5pi.css';
import '../../css/y/yeotz5brn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="pvig9y5pi"/><path class="yeotz5brn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:at-sign"} {...others} />);
}

export default Component;

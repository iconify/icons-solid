import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/j/jyeysfb7o.css';
import '../../css/y/yer7eoxcb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="jyeysfb7o"/><path class="yer7eoxcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:phone"} {...others} />);
}

export default Component;

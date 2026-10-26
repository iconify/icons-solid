import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/a/aeiyobhbi.css';
import '../../css/a/a04a_c-3l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="aeiyobhbi"/><path class="a04a_c-3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:pencil"} {...others} />);
}

export default Component;

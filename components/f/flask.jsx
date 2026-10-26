import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vn0eg2bzk.css';
import '../../css/x/xq0vw-b8x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="vn0eg2bzk"/><path class="xq0vw-b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:flask"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/lmsnmabhc.css';
import '../../css/x/xcvwpz0ws.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="lmsnmabhc"/><path class="xcvwpz0ws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:gingerbread-man"} {...others} />);
}

export default Component;

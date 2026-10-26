import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/k/k09cznb4l.css';
import '../../css/s/s77ct03xo.css';
import '../../css/v/vkbm4gg9j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="k09cznb4l"/><path class="s77ct03xo"/><path class="vkbm4gg9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:snowflake"} {...others} />);
}

export default Component;

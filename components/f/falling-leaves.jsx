import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/d3r56zbao.css';
import '../../css/z/zf8nsvb4g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="d3r56zbao"/><path class="zf8nsvb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:falling-leaves"} {...others} />);
}

export default Component;

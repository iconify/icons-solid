import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uv8rmov5t.css';
import '../../css/g/g-p7izu9g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="uv8rmov5t"/><path class="g-p7izu9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:pumpkin-pie"} {...others} />);
}

export default Component;

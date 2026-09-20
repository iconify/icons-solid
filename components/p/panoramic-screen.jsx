import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wndlmq54d.css';
import '../../css/e/ex-l8ubxs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wndlmq54d"/><path class="ex-l8ubxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:panoramic-screen"} {...others} />);
}

export default Component;

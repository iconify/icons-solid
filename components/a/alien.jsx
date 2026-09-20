import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/y/yof_cwmqx.css';
import '../../css/v/vyx5am_-s.css';
import '../../css/u/u4c8b-0dz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="yof_cwmqx"/><path class="vyx5am_-s"/><path class="u4c8b-0dz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:alien"} {...others} />);
}

export default Component;

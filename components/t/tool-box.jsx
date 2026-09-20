import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/h/hwqlugc7u.css';
import '../../css/x/x8k7tccux.css';
import '../../css/q/qsp6au5vk.css';
import '../../css/y/ym9xv8b7x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="hwqlugc7u"/><path class="x8k7tccux"/><path class="qsp6au5vk"/><path class="ym9xv8b7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:tool-box"} {...others} />);
}

export default Component;

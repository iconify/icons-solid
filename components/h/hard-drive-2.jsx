import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/odzopnbzy.css';
import '../../css/m/m6_rikbwq.css';
import '../../css/h/hxfuk31vk.css';
import '../../css/u/unte-z7-q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="odzopnbzy"/><path class="m6_rikbwq"/><path class="hxfuk31vk"/><path class="unte-z7-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hard-drive-2"} {...others} />);
}

export default Component;

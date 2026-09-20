import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wexq0gd0w.css';
import '../../css/n/nffe8oyfe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wexq0gd0w"/><path class="nffe8oyfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:page-setting"} {...others} />);
}

export default Component;

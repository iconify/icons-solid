import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xuh7znbmb.css';
import '../../css/f/fnecjwb1i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="xuh7znbmb"/><path class="fnecjwb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:select-circle-area-1"} {...others} />);
}

export default Component;

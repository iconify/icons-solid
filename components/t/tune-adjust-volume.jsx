import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/huarzwb0e.css';
import '../../css/o/od_iueq1z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="huarzwb0e"/><path class="od_iueq1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:tune-adjust-volume"} {...others} />);
}

export default Component;

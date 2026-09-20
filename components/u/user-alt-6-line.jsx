import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/tla7g4mpv.css';
import '../../css/d/d4z8ksbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path clip-rule="evenodd" class="tla7g4mpv"/><path class="d4z8ksbxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:user-alt-6-line"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p0v-jwbgl.css';
import '../../css/d/d1s2x4b6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p0v-jwbgl wm-k"/><path class="d1s2x4b6p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rabbit-sketch"} {...others} />);
}

export default Component;

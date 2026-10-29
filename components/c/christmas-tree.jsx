import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fn6tf1vwd.css';
import '../../css/m/ms3s4wbhz.css';
import '../../css/n/n0zo80fbk.css';
import '../../css/g/g_os4lb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fn6tf1vwd wm-k"/><path class="ms3s4wbhz wm-a"/><path class="n0zo80fbk"/><path class="g_os4lb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:christmas-tree"} {...others} />);
}

export default Component;

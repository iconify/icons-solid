import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hvochnbfw.css';
import '../../css/s/spa5ssbyd.css';
import '../../css/u/ua-k4sbny.css';
import '../../css/d/dksj1oe9e.css';
import '../../css/e/evfqetbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hvochnbfw wm-k"/><path class="spa5ssbyd wm-s"/><path class="ua-k4sbny"/><path class="dksj1oe9e"/><path class="evfqetbdn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:calendar-search"} {...others} />);
}

export default Component;

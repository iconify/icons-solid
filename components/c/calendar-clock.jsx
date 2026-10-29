import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u05w6wvrx.css';
import '../../css/b/bglb_-bwd.css';
import '../../css/u/ua-k4sbny.css';
import '../../css/d/dksj1oe9e.css';
import '../../css/g/gh-fgn-ur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u05w6wvrx wm-k"/><path class="bglb_-bwd wm-s"/><path class="ua-k4sbny"/><path class="dksj1oe9e"/><path class="gh-fgn-ur wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:calendar-clock"} {...others} />);
}

export default Component;

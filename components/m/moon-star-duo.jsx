import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/neorgv4af.css';
import '../../css/p/p36q5om8r.css';
import '../../css/x/x74picb7l.css';
import '../../css/s/sfp-qh-hh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="neorgv4af"/><path class="p36q5om8r wm-s"/><path class="wm-s x74picb7l"/><path class="sfp-qh-hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:moon-star-duo"} {...others} />);
}

export default Component;

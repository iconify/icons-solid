import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s93rdabbe.css';
import '../../css/c/c4_wodreq.css';
import '../../css/w/wcute_4vd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="s93rdabbe"/><path class="c4_wodreq wm-a"/><path class="wcute_4vd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-duo"} {...others} />);
}

export default Component;

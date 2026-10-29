import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ki9nxfqhe.css';
import '../../css/l/lf-b92d3v.css';
import '../../css/f/fuyz5hbco.css';
import '../../css/f/f78e21b0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ki9nxfqhe"/><path class="lf-b92d3v wm-s"/><path class="fuyz5hbco"/><path class="f78e21b0t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clock-check-duo"} {...others} />);
}

export default Component;

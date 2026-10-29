import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nuu7pj2tk.css';
import '../../css/a/agr8unbte.css';
import '../../css/l/la1njcbhy.css';
import '../../css/w/wawkbcc0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nuu7pj2tk"/><path class="agr8unbte wm-a"/><path class="la1njcbhy"/><path class="wawkbcc0p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pencil-ruler-duo"} {...others} />);
}

export default Component;

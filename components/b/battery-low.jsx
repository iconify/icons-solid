import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e8mb1rodb.css';
import '../../css/e/e066grb0j.css';
import '../../css/h/hn7xqebqj.css';
import '../../css/w/w6r4lacra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e8mb1rodb wm-shadow"/><path class="e066grb0j"/><path class="hn7xqebqj"/><path class="w6r4lacra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:battery-low"} {...others} />);
}

export default Component;

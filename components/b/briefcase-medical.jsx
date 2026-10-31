import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m2f-98b-g.css';
import '../../css/h/h1ly0nbei.css';
import '../../css/f/fdo6gdc9b.css';
import '../../css/p/p3i7i-74l.css';
import '../../css/e/ec0h_8-ge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m2f-98b-g wm-shadow"/><path class="h1ly0nbei"/><path class="fdo6gdc9b"/><path class="p3i7i-74l"/><path class="ec0h_8-ge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:briefcase-medical"} {...others} />);
}

export default Component;

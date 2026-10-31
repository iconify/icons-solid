import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bd374vbsj.css';
import '../../css/y/ypbfh0z5c.css';
import '../../css/n/nea_p2b3n.css';
import '../../css/j/jmvirxj7e.css';
import '../../css/o/ospxqvbgy.css';
import '../../css/i/ihqiidb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bd374vbsj wm-shadow"/><path class="ypbfh0z5c"/><path class="nea_p2b3n"/><path class="jmvirxj7e"/><path class="ospxqvbgy"/><path class="ihqiidb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:database"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a3ty376mn.css';
import '../../css/s/sm4y0jbyl.css';
import '../../css/l/l1bonrbrn.css';
import '../../css/o/oi2kxk0gz.css';
import '../../css/g/goxeseb-e.css';
import '../../css/l/l_79yo57o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a3ty376mn wm-shadow"/><path class="sm4y0jbyl"/><path class="l1bonrbrn"/><path class="oi2kxk0gz"/><path class="goxeseb-e"/><path class="l_79yo57o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heart"} {...others} />);
}

export default Component;

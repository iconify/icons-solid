import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gv_9_gb-f.css';
import '../../css/m/m205orxvc.css';
import '../../css/h/hu7ghyavu.css';
import '../../css/j/jtd8fdb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gv_9_gb-f wm-k"/><path class="m205orxvc wm-k"/><path class="hu7ghyavu wm-s"/><path class="jtd8fdb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:holi-splash"} {...others} />);
}

export default Component;

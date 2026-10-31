import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zt-tqqxoo.css';
import '../../css/m/m50kypmqg.css';
import '../../css/x/x_0w6qb_r.css';
import '../../css/p/p4nqbnb9s.css';
import '../../css/c/cp-ektmmr.css';
import '../../css/n/nwf5fm3xu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zt-tqqxoo"/><path class="m50kypmqg"/><path class="x_0w6qb_r"/><path class="p4nqbnb9s"/><path class="cp-ektmmr"/><path class="nwf5fm3xu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:message-square-warning"} {...others} />);
}

export default Component;

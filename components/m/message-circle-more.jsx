import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v5fz6ctfc.css';
import '../../css/s/sf3f2gb3t.css';
import '../../css/x/x3vphht4j.css';
import '../../css/p/p9vxbdb1s.css';
import '../../css/u/u712--bhn.css';
import '../../css/u/uqz02hbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v5fz6ctfc wm-shadow"/><path class="sf3f2gb3t"/><path class="x3vphht4j"/><path class="p9vxbdb1s"/><path class="u712--bhn"/><path class="uqz02hbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:message-circle-more"} {...others} />);
}

export default Component;

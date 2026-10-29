import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wbdf4r_bl.css';
import '../../css/r/r1dkfzbcd.css';
import '../../css/p/pqfxb1g_c.css';
import '../../css/x/x9rm5flou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wbdf4r_bl wm-k"/><path class="r1dkfzbcd wm-k"/><path class="pqfxb1g_c wm-s"/><path class="x9rm5flou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:haunted-house"} {...others} />);
}

export default Component;

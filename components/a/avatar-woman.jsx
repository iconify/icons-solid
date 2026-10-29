import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/ccsycwb7a.css';
import '../../css/x/x8a98837g.css';
import '../../css/h/hyiv-xb_h.css';
import '../../css/p/poq3yy2ry.css';
import '../../css/b/bdp8-zbfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ccsycwb7a"/><path class="x8a98837g"/><path class="hyiv-xb_h"/><path class="poq3yy2ry"/><path class="bdp8-zbfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-woman"} {...others} />);
}

export default Component;

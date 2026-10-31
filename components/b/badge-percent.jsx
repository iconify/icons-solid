import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tpyh8vb5n.css';
import '../../css/d/d-ig5rb5w.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/r/r2fnfdpvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tpyh8vb5n"/><path class="d-ig5rb5w wm-shine"/><path class="hooc3vbcx wm-k"/><path class="r2fnfdpvh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:badge-percent"} {...others} />);
}

export default Component;

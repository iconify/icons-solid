import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dw47yel7y.css';
import '../../css/g/g6an5ei9s.css';
import '../../css/u/u_8_gxjut.css';
import '../../css/l/lva1h7g9t.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="dw47yel7y"/><path class="g6an5ei9s"/><path class="u_8_gxjut"/><path class="lva1h7g9t"/></g><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:folding-stool-off"} {...others} />);
}

export default Component;

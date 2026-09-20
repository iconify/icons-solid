import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1wyxpsbk.css';
import '../../css/r/rhbtr-42b.css';
import '../../css/e/em-qxpb0r.css';
import '../../css/v/v5rkscndi.css';
import '../../css/z/z_k5fwbwj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q1wyxpsbk"/><path clip-rule="evenodd" class="rhbtr-42b"/><path clip-rule="evenodd" class="em-qxpb0r"/><path clip-rule="evenodd" class="v5rkscndi"/><path clip-rule="evenodd" class="z_k5fwbwj"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:coins-off"} {...others} />);
}

export default Component;

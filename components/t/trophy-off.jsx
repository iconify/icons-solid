import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_svlibxp.css';
import '../../css/j/j6g7fh9mm.css';
import '../../css/a/aptgf3b3w.css';
import '../../css/o/ogtc2yb-a.css';
import '../../css/g/gcaxlpn6i.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b_svlibxp"/><path clip-rule="evenodd" class="j6g7fh9mm"/><path clip-rule="evenodd" class="aptgf3b3w"/><path clip-rule="evenodd" class="ogtc2yb-a"/><path clip-rule="evenodd" class="gcaxlpn6i"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:trophy-off"} {...others} />);
}

export default Component;

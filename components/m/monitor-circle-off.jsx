import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4uiovtmd.css';
import '../../css/x/xfqauol3x.css';
import '../../css/a/aw5j0obfz.css';
import '../../css/k/ktr_qhbea.css';
import '../../css/o/owa4l2cof.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d4uiovtmd"/><path class="xfqauol3x"/><path clip-rule="evenodd" class="aw5j0obfz"/><path class="ktr_qhbea"/><path clip-rule="evenodd" class="owa4l2cof"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:monitor-circle-off"} {...others} />);
}

export default Component;

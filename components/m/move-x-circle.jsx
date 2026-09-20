import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dy-awy0ir.css';
import '../../css/g/g_s77ruob.css';
import '../../css/w/w2ifseclb.css';
import '../../css/y/yg9621rfx.css';
import '../../css/e/e44mx_b3e.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dy-awy0ir"/><path class="g_s77ruob"/><path class="w2ifseclb"/><path class="yg9621rfx"/><path class="e44mx_b3e"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:move-x-circle"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mrdllpb7f.css';
import '../../css/u/uppyu2lrf.css';
import '../../css/t/tpz7t9qvo.css';
import '../../css/s/s_wa2mb4r.css';
import '../../css/n/nqicz80dr.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mrdllpb7f"/><path class="uppyu2lrf"/><path class="tpz7t9qvo"/><path class="s_wa2mb4r"/><path class="nqicz80dr"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:watch-circle"} {...others} />);
}

export default Component;

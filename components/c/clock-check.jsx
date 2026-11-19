import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kq_joybgz.css';
import '../../css/q/qkslehbxy.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/b/bsvkh1bgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kq_joybgz"/><path class="qkslehbxy"/><circle class="lx_j5lb4z"/><path class="bsvkh1bgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-check"} {...others} />);
}

export default Component;

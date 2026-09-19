import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qx86n3bzj.css';
import '../../css/o/oahz3hi0z.css';
import '../../css/c/c7ovzuqmm.css';
import '../../css/k/kz5njxwrc.css';
import '../../css/b/bw_d_qbfo.css';
import '../../css/d/dw_-3ruuc.css';
import '../../css/r/ri8h8qijo.css';
import '../../css/v/v9n6qirjn.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qx86n3bzj"/><path class="oahz3hi0z"/><path class="c7ovzuqmm"/><path class="kz5njxwrc"/><path class="bw_d_qbfo"/><path class="dw_-3ruuc"/><path class="ri8h8qijo"/><path class="v9n6qirjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:fire"} {...others} />);
}

export default Component;

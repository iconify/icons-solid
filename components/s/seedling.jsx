import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qc-apv10r.css';
import '../../css/n/n4byf3-kh.css';
import '../../css/s/spbi7bcof.css';
import '../../css/t/tdapwmbfy.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qc-apv10r"/><path class="n4byf3-kh"/><path class="spbi7bcof"/><path class="tdapwmbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:seedling"} {...others} />);
}

export default Component;

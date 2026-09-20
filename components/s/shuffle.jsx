import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/cnfjgmdcb.css';
import '../../css/m/mf0yxrq8v.css';
import '../../css/h/hs9g5acuz.css';
import '../../css/i/iy3mnob7p.css';
import '../../css/e/e-qescbuo.css';
import '../../css/h/huu1r6ztb.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="cnfjgmdcb"/><path class="mf0yxrq8v"/><path class="hs9g5acuz"/></g><path class="iy3mnob7p"/><path class="e-qescbuo"/><path class="huu1r6ztb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:shuffle"} {...others} />);
}

export default Component;

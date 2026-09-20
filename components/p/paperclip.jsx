import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/r/r7v32ub5y.css';
import '../../css/v/vfbncabzo.css';
import '../../css/t/tpfdgiz5d.css';
import '../../css/a/a1zx_pbxi.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="r7v32ub5y"/><path class="vfbncabzo"/></g><path class="tpfdgiz5d"/><path class="a1zx_pbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:paperclip"} {...others} />);
}

export default Component;

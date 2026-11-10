import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjn698bso.css';
import '../../css/q/ql-0qix9e.css';
import '../../css/z/zyjy00vld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="zjn698bso"/><circle class="ql-0qix9e"/><path class="zyjy00vld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fahrenheit"} {...others} />);
}

export default Component;

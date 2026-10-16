import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yikm9ubfr.css';
import '../../css/a/a1da0u99y.css';
import '../../css/q/q83po7bsk.css';
import '../../css/p/pwtdgxb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="yikm9ubfr"/><circle class="a1da0u99y"/><path class="q83po7bsk"/><path class="pwtdgxb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tuning"} {...others} />);
}

export default Component;

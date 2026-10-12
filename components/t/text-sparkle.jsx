import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fa3dpbb_n.css';
import '../../css/x/x3q4mjq5t.css';
import '../../css/d/di91dybwj.css';
import '../../css/k/kty0tbbzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fa3dpbb_n"/><path class="x3q4mjq5t"/><path class="di91dybwj"/><path class="kty0tbbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-sparkle"} {...others} />);
}

export default Component;

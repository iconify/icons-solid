import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjn698bso.css';
import '../../css/y/ytafwab8y.css';
import '../../css/q/ql-0qix9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="zjn698bso"/><path class="ytafwab8y"/><circle class="ql-0qix9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fahrenheit"} {...others} />);
}

export default Component;

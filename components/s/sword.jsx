import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7vpjpnff.css';
import '../../css/i/i44887cfx.css';
import '../../css/q/qwwflebai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k7vpjpnff"/><path class="i44887cfx"/><path class="qwwflebai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sword"} {...others} />);
}

export default Component;

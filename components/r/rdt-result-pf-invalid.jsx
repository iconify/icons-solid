import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ky9r5pbzy.css';
import '../../css/u/utr6sxn7s.css';
import '../../css/o/o8sha-b1n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ky9r5pbzy"/><path clip-rule="evenodd" class="utr6sxn7s"/><path class="o8sha-b1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-pf-invalid"} {...others} />);
}

export default Component;

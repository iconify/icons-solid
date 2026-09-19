import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o9-4x4bcb.css';
import '../../css/w/wvouqqeyv.css';
import '../../css/n/nf593dbwl.css';
import '../../css/o/o8sha-b1n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="o9-4x4bcb"/><path clip-rule="evenodd" class="wvouqqeyv"/><path clip-rule="evenodd" class="nf593dbwl"/><path class="o8sha-b1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-pf-invalid-outline"} {...others} />);
}

export default Component;

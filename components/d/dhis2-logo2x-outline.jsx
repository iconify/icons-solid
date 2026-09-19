import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/irq2_dbnj.css';
import '../../css/r/reibu1jor.css';
import '../../css/p/ps1k-2b5u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="irq2_dbnj"/><path clip-rule="evenodd" class="reibu1jor"/><path class="ps1k-2b5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dhis2-logo2x-outline"} {...others} />);
}

export default Component;

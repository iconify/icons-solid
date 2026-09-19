import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozp_01nrn.css';
import '../../css/n/nk5wt5brv.css';
import '../../css/r/rsrrjow2s.css';
import '../../css/n/n-nv5yscg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ozp_01nrn"/><path class="nk5wt5brv"/><path clip-rule="evenodd" class="rsrrjow2s"/><path class="n-nv5yscg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:old-woman-outline"} {...others} />);
}

export default Component;

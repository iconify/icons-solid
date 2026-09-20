import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4-4i7b1x.css';
import '../../css/g/g_759wb8a.css';
import '../../css/i/is3nxobrb.css';
import '../../css/k/kgkyg2n_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r4-4i7b1x"/><path class="g_759wb8a"/><path clip-rule="evenodd" class="is3nxobrb"/><path class="kgkyg2n_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pathfinder-outline-flat"} {...others} />);
}

export default Component;

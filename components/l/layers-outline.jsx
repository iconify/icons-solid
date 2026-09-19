import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s94g_g9qz.css';
import '../../css/k/k036or4il.css';
import '../../css/a/a890hygxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="layers-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="s94g_g9qz"/><path class="k036or4il"/><path class="a890hygxs"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:layers-outline"} {...others} />);
}

export default Component;

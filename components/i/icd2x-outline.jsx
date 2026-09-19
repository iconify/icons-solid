import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/otw5jg97e.css';
import '../../css/k/kcy22cc0q.css';
import '../../css/v/vfc_tmbcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="otw5jg97e"/><path clip-rule="evenodd" class="kcy22cc0q"/><path clip-rule="evenodd" class="vfc_tmbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:icd2x-outline"} {...others} />);
}

export default Component;

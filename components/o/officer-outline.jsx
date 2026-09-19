import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vu-hby3bm.css';
import '../../css/l/lyv_st-0c.css';
import '../../css/o/osry1lvwl.css';
import '../../css/k/kan9o3fem.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="vu-hby3bm"/><path clip-rule="evenodd" class="lyv_st-0c"/><path class="osry1lvwl"/><path clip-rule="evenodd" class="kan9o3fem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:officer-outline"} {...others} />);
}

export default Component;

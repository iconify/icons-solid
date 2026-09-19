import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-44blbvn.css';
import '../../css/e/evuc5vbmd.css';
import '../../css/n/n_ea_d4_w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="c-44blbvn"/><path clip-rule="evenodd" class="evuc5vbmd"/><path class="n_ea_d4_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:vespa-motorcycle"} {...others} />);
}

export default Component;

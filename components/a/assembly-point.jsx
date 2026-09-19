import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mqr4j-mcw.css';
import '../../css/x/xfp6bfr_k.css';
import '../../css/b/b70npha0t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mqr4j-mcw"/><path class="xfp6bfr_k"/><path clip-rule="evenodd" class="b70npha0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:assembly-point"} {...others} />);
}

export default Component;

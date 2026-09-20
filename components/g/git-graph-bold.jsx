import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cx-byxm-k.css';
import '../../css/g/gtnoc3_rf.css';
import '../../css/s/sm4k1ettw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cx-byxm-k"/><path class="gtnoc3_rf"/><path clip-rule="evenodd" class="sm4k1ettw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-graph-bold"} {...others} />);
}

export default Component;

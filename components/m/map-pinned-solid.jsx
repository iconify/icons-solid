import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kc33thgni.css';
import '../../css/l/lg07v2bfn.css';
import '../../css/h/h_pvdzb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kc33thgni"/><path class="lg07v2bfn"/><path class="h_pvdzb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:map-pinned-solid"} {...others} />);
}

export default Component;

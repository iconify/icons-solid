import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sm2p3o1pp.css';
import '../../css/h/hxkflkbfn.css';
import '../../css/u/uctsv_j5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sm2p3o1pp"/><path class="hxkflkbfn"/><path class="uctsv_j5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chart-network"} {...others} />);
}

export default Component;

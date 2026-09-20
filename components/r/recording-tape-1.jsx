import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qvdv6gb6z.css';
import '../../css/h/hylzlpb6h.css';
import '../../css/k/kaxh6uvgt.css';
import '../../css/p/p4qfs_7kk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="qvdv6gb6z"/><path class="hylzlpb6h"/><path class="kaxh6uvgt"/><path class="p4qfs_7kk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:recording-tape-1"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d3u7sce2p.css';
import '../../css/z/zlr7xzbvq.css';
import '../../css/k/k1odkub2p.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d3u7sce2p"/><path class="zlr7xzbvq"/><path class="k1odkub2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:domestic-worker"} {...others} />);
}

export default Component;

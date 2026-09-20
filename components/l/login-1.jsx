import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zkdnhvb2p.css';
import '../../css/n/n1yo5zbgq.css';
import '../../css/h/h7nnb4boh.css';
import '../../css/o/oq2msub3o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="zkdnhvb2p"/><path class="n1yo5zbgq"/><path class="h7nnb4boh"/><path class="oq2msub3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:login-1"} {...others} />);
}

export default Component;

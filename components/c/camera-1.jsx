import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mbw-ykb3e.css';
import '../../css/d/d4slrv-ys.css';
import '../../css/p/pdp2tgbyv.css';
import '../../css/z/zsr3gvben.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mbw-ykb3e"/><path class="d4slrv-ys"/><path class="pdp2tgbyv"/><path class="zsr3gvben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:camera-1"} {...others} />);
}

export default Component;

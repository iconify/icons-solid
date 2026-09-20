import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mcnvfyv3x.css';
import '../../css/l/lqndm293u.css';
import '../../css/k/k6qro_vwd.css';
import '../../css/h/hlvpo9b3u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mcnvfyv3x"/><path class="lqndm293u"/><path class="k6qro_vwd"/><path class="hlvpo9b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:graph-arrow-user-increase"} {...others} />);
}

export default Component;

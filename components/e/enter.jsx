import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mn60u_xaa.css';
import '../../css/s/s72jc8bgn.css';
import '../../css/b/bf7l22bfs.css';
import '../../css/v/vkf35_b2l.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mn60u_xaa"/><path class="s72jc8bgn"/><path class="bf7l22bfs"/><path class="vkf35_b2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:enter"} {...others} />);
}

export default Component;

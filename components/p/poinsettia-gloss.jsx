import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tzk719bov.css';
import '../../css/b/b_5s04lfu.css';
import '../../css/s/smz1kc4xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="tzk719bov wm-k"/><path class="b_5s04lfu wm-k"/><path class="smz1kc4xq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:poinsettia-gloss"} {...others} />);
}

export default Component;

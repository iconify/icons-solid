import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pl-p6qb-v.css';
import '../../css/y/yisg2xf3a.css';
import '../../css/c/cq_-qoy2r.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pl-p6qb-v"/><path class="yisg2xf3a"/><path class="cq_-qoy2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:megaphone"} {...others} />);
}

export default Component;

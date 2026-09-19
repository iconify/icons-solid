import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vx5xd6byq.css';
import '../../css/q/qe5mrybjn.css';
import '../../css/j/j9yh9hwkt.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vx5xd6byq"/><path class="qe5mrybjn"/><path class="j9yh9hwkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:studio-light-front"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jbfihy_pq.css';
import '../../css/n/nu367bc9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jbfihy_pq"/><path class="nu367bc9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:mobile"} {...others} />);
}

export default Component;

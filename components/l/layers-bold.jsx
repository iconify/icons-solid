import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tmqkr8aln.css';
import '../../css/x/xjllajbsa.css';
import '../../css/w/wg7rq9b7c.css';
import '../../css/e/ecna9tb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="tmqkr8aln"/><path clip-rule="evenodd" class="xjllajbsa"/><path class="wg7rq9b7c"/><path class="ecna9tb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-bold"} {...others} />);
}

export default Component;

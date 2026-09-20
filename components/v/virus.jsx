import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e2kadjbvp.css';
import '../../css/x/xqhdghbln.css';
import '../../css/u/uxzt8-b9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e2kadjbvp"/><path class="xqhdghbln"/><path clip-rule="evenodd" class="uxzt8-b9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:virus"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnpcr4b1t.css';
import '../../css/w/wnai51b8e.css';
import '../../css/a/a_qs_pi8q.css';
import '../../css/n/n1w8olb7s.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xnpcr4b1t"/><path class="wnai51b8e"/><path class="a_qs_pi8q"/><path class="n1w8olb7s"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-2-outline"} {...others} />);
}

export default Component;

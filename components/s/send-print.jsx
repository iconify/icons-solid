import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qhwzu4b0a.css';
import '../../css/t/tumqksvsx.css';
import '../../css/u/u_7ve-3cq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="qhwzu4b0a"/><path clip-rule="evenodd" class="tumqksvsx"/><path class="u_7ve-3cq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:send-print"} {...others} />);
}

export default Component;

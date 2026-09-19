import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttt_csb7t.css';
import '../../css/c/cnjv6tbhg.css';
import '../../css/n/ngw06abol.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ttt_csb7t"/><path clip-rule="evenodd" class="cnjv6tbhg"/><path class="ngw06abol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:monitor"} {...others} />);
}

export default Component;

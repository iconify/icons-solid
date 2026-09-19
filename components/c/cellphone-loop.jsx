import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xla6qubvq.css';
import '../../css/r/r73cul5cx.css';
import '../../css/w/w6lr59vyt.css';
import '../../css/a/as9-zc2xi.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="xla6qubvq"/><path clip-rule="evenodd" class="r73cul5cx"/><path clip-rule="evenodd" class="w6lr59vyt"/><path clip-rule="evenodd" class="as9-zc2xi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:cellphone-loop"} {...others} />);
}

export default Component;

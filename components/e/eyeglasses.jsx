import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhpf8pbqq.css';
import '../../css/g/gdryfccos.css';
import '../../css/o/oxtw1expr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="dhpf8pbqq"/><path clip-rule="evenodd" class="gdryfccos"/><path class="oxtw1expr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:eyeglasses"} {...others} />);
}

export default Component;

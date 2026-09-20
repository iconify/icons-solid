import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/krcelihbz.css';
import '../../css/n/n76sdzv2k.css';
import '../../css/q/q44e-r43q.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="krcelihbz"/><path class="n76sdzv2k"/><path class="q44e-r43q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:qr-code-flat"} {...others} />);
}

export default Component;

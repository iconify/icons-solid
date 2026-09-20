import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ceroknbfa.css';
import '../../css/m/mbjxabcpy.css';
import '../../css/d/djdfu5b9n.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ceroknbfa"/><path class="mbjxabcpy"/><path class="djdfu5b9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:graph-dot-flat"} {...others} />);
}

export default Component;

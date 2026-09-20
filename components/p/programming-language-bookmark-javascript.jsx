import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sb8lcabgc.css';
import '../../css/c/c-hho8xra.css';
import '../../css/o/ow1qj4p-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sb8lcabgc"/><path class="c-hho8xra"/><path class="ow1qj4p-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:programming-language-bookmark-javascript"} {...others} />);
}

export default Component;

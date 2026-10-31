import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p8eiwgunm.css';
import '../../css/n/nn4h-1bks.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="bi12bsetm"><path class="p8eiwgunm"/><path class="nn4h-1bks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gr"} {...others} />);
}

export default Component;

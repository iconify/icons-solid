import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h754ff_bs.css';
import '../../css/t/tjznz3bqe.css';
import '../../css/u/uzt_qbcfs.css';
import '../../css/v/vfrwuab3k.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="h754ff_bs"/><path class="tjznz3bqe"/><path class="uzt_qbcfs"/><path class="vfrwuab3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-2-outline"} {...others} />);
}

export default Component;

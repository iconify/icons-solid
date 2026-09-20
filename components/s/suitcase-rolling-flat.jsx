import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cxb5acbfq.css';
import '../../css/p/pu--7xbjp.css';
import '../../css/c/c7s0occxu.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cxb5acbfq"/><path class="pu--7xbjp"/><path class="c7s0occxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:suitcase-rolling-flat"} {...others} />);
}

export default Component;

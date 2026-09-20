import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wfd-hn76v.css';
import '../../css/k/kb89oqhiv.css';
import '../../css/w/w1nza9b4n.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wfd-hn76v"/><path class="kb89oqhiv"/><path class="w1nza9b4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:departure-time-flat"} {...others} />);
}

export default Component;

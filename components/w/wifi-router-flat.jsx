import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wl0x9u5jz.css';
import '../../css/o/oud6qo14q.css';
import '../../css/d/disikgarl.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wl0x9u5jz"/><path class="oud6qo14q"/><path class="disikgarl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wifi-router-flat"} {...others} />);
}

export default Component;

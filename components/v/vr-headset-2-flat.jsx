import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/omazkmbrf.css';
import '../../css/v/v1lgmvned.css';
import '../../css/m/myvq1cxds.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="omazkmbrf"/><path class="v1lgmvned"/><path class="myvq1cxds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:vr-headset-2-flat"} {...others} />);
}

export default Component;

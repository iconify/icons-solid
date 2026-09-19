import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq_rlaczy.css';
import '../../css/j/j-b8pcbum.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cq_rlaczy"/><path class="j-b8pcbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:cloud-upload"} {...others} />);
}

export default Component;

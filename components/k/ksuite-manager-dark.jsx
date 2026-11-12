import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejxafrb5z.css';
import '../../css/l/ls85y2czm.css';
import '../../css/p/pb8rmtbxv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ejxafrb5z"/><path class="ls85y2czm"/><path class="pb8rmtbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-manager-dark"} {...others} />);
}

export default Component;

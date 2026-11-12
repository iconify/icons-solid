import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cua72wbew.css';
import '../../css/h/hsd7tzbla.css';
import '../../css/k/kbi-vfbsy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cua72wbew"/><path class="hsd7tzbla"/><path class="kbi-vfbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:qdrant-dark"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7_bml7xz.css';
import '../../css/k/kte3hjbxw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s7_bml7xz"/><path class="kte3hjbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:network-nodes-20"} {...others} />);
}

export default Component;

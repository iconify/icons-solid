import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oa-dagiaz.css';
import '../../css/k/kialax5-u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oa-dagiaz"/><path class="kialax5-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-network-48"} {...others} />);
}

export default Component;

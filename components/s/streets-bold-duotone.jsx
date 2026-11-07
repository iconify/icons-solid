import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfp_v5kne.css';
import '../../css/o/ow6-kpbfs.css';
import '../../css/q/qcydym7-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfp_v5kne"/><path class="ow6-kpbfs"/><path class="qcydym7-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-bold-duotone"} {...others} />);
}

export default Component;

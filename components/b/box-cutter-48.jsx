import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc3ilob8v.css';
import '../../css/o/ocwmt_j3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oc3ilob8v"/><path class="ocwmt_j3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:box-cutter-48"} {...others} />);
}

export default Component;

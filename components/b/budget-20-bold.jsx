import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iccsyvk3j.css';
import '../../css/q/qcnm51b0a.css';
import '../../css/s/sukfcubwp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iccsyvk3j"/><path class="qcnm51b0a"/><path class="sukfcubwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:budget-20-bold"} {...others} />);
}

export default Component;

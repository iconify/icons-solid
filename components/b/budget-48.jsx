import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca_z99bhx.css';
import '../../css/g/gzw4njbqf.css';
import '../../css/t/t_h9pt-ap.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ca_z99bhx"/><path class="gzw4njbqf"/><path class="t_h9pt-ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:budget-48"} {...others} />);
}

export default Component;

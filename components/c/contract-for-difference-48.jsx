import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca_z99bhx.css';
import '../../css/w/w3ql33bwg.css';
import '../../css/w/wm3m0vl4d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ca_z99bhx"/><path class="w3ql33bwg"/><path class="wm3m0vl4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contract-for-difference-48"} {...others} />);
}

export default Component;

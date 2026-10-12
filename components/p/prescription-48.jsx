import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca_z99bhx.css';
import '../../css/n/nusyf_vqj.css';
import '../../css/w/wifu02bjh.css';
import '../../css/k/kkewfyjzc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ca_z99bhx"/><path class="nusyf_vqj"/><path class="wifu02bjh"/><path class="kkewfyjzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:prescription-48"} {...others} />);
}

export default Component;

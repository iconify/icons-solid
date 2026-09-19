import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs_bqebbh.css';
import '../../css/m/m3lxbjutz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zs_bqebbh"/><path class="m3lxbjutz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-z-cloud-provisioning"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqsa_mblk.css';
import '../../css/c/cx1y_wb5f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qqsa_mblk"/><path class="cx1y_wb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:proxmox"} {...others} />);
}

export default Component;

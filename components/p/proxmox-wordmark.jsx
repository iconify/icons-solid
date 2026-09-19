import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5pyydzvd.css';
import '../../css/w/w_gpdib1f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q5pyydzvd"/><path class="w_gpdib1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:proxmox-wordmark"} {...others} />);
}

export default Component;

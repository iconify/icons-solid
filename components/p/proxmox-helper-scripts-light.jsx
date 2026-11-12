import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkcum6bdj.css';
import '../../css/e/e-q1i1bfg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qkcum6bdj"/><path class="e-q1i1bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proxmox-helper-scripts-light"} {...others} />);
}

export default Component;

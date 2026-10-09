import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0xmcccfl.css';
import '../../css/r/r_8u_eb_k.css';
import '../../css/d/dy97t_1fn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w0xmcccfl"/><path class="r_8u_eb_k"/><path class="dy97t_1fn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speaker-20-bold"} {...others} />);
}

export default Component;

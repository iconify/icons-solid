import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tb91skb8m.css';
import '../../css/j/j2ptblbrz.css';
import '../../css/m/mkw0-ac3d.css';
import '../../css/a/ao8tt2btf.css';
import '../../css/k/kbdpyz3jj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tb91skb8m"/><path class="j2ptblbrz"/><path class="mkw0-ac3d"/><path class="ao8tt2btf"/><path class="kbdpyz3jj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:view-2"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0wkzbb8d.css';
import '../../css/n/nf-lt59yy.css';
import '../../css/v/vpbv2k_eh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="n0wkzbb8d"/><path class="nf-lt59yy"/><path class="vpbv2k_eh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:vpn-connection"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/onao27b_c.css';
import '../../css/d/dmeb_lbay.css';
import '../../css/k/kr4h8my1w.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="bi12bsetm"><path class="onao27b_c"/><path class="dmeb_lbay"/><path class="kr4h8my1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:tmux-wordmark"} {...others} />);
}

export default Component;

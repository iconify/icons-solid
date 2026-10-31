import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d9t2abtjj.css';
import '../../css/n/n48oy1bff.css';
import '../../css/y/yrkvtpn7y.css';
import '../../css/x/xu4vo3b0g.css';
import '../../css/k/klpm2wbyc.css';
import '../../css/u/u8be8bcbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="d9t2abtjj wm-shadow"/><path class="n48oy1bff"/><path class="yrkvtpn7y"/><path class="xu4vo3b0g"/><path class="klpm2wbyc"/><path class="u8be8bcbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:copy"} {...others} />);
}

export default Component;

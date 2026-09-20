import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yivttkrvg.css';
import '../../css/i/iac4se_hi.css';
import '../../css/r/rlx_edbba.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="yivttkrvg"/><path class="iac4se_hi"/><path class="rlx_edbba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:browser-bookmark"} {...others} />);
}

export default Component;

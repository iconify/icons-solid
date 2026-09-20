import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j6_9ezbtb.css';
import '../../css/w/w3lsaijhs.css';
import '../../css/l/lbdagjb_m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="j6_9ezbtb"/><path class="w3lsaijhs"/><path class="lbdagjb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:square-clock"} {...others} />);
}

export default Component;

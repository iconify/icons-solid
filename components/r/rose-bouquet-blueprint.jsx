import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eejcbcpnz.css';
import '../../css/h/hd550qe5v.css';
import '../../css/y/y9os12cwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="eejcbcpnz wm-deco"/><path class="hd550qe5v wm-k"/><path class="wm-a y9os12cwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rose-bouquet-blueprint"} {...others} />);
}

export default Component;

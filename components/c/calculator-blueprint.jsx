import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ixx_sebyw.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/f/f8h9mitoo.css';
import '../../css/n/nh5rovrci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ixx_sebyw wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="f8h9mitoo wm-k"/><path class="nh5rovrci wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calculator-blueprint"} {...others} />);
}

export default Component;

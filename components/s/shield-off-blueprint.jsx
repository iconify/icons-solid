import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ibpnj1b4u.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/g/gcz3jrbxo.css';
import '../../css/g/gwhk54bhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ibpnj1b4u wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="gcz3jrbxo wm-k"/><path class="gwhk54bhf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-off-blueprint"} {...others} />);
}

export default Component;

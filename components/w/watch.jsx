import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1qjjmbki.css';
import '../../css/u/uo2p8nbbc.css';
import '../../css/x/xisb9cb_u.css';
import '../../css/q/qhdghcc_z.css';
import '../../css/b/bn_jmt3pk.css';
import '../../css/v/vomqbubno.css';
import '../../css/u/u1pehq5jp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b1qjjmbki wm-k"/><path class="uo2p8nbbc wm-deco"/><path class="wm-k xisb9cb_u"/><path class="qhdghcc_z wm-k"/><path class="bn_jmt3pk wm-shadow"/><path class="vomqbubno wm-shine"/><path class="u1pehq5jp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:watch"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gg-mv2bgo.css';
import '../../css/q/q0-i_05yv.css';
import '../../css/x/xxw3a2byj.css';
import '../../css/p/pgfe_0kpr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gg-mv2bgo"/><path class="q0-i_05yv wm-k"/><path class="wm-k xxw3a2byj"/><path class="pgfe_0kpr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bus-sketch"} {...others} />);
}

export default Component;

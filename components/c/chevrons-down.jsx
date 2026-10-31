import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mu8p_tbuc.css';
import '../../css/q/qgoo28zqg.css';
import '../../css/l/lskufrbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mu8p_tbuc wm-k"/><path class="qgoo28zqg wm-a"/><path class="lskufrbgk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chevrons-down"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cyof0y6qa.css';
import '../../css/d/daavqxbbp.css';
import '../../css/s/s-z94cbbp.css';
import '../../css/t/tpdxq8bdv.css';
import '../../css/h/hhyezezum.css';
import '../../css/q/qq4fj_crx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="cyof0y6qa wm-shadow"/><path class="daavqxbbp"/><path class="s-z94cbbp"/><path class="tpdxq8bdv"/><path class="hhyezezum wm-shine"/><path class="qq4fj_crx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:door-closed"} {...others} />);
}

export default Component;

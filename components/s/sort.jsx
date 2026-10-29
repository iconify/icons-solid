import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/htocrpbkx.css';
import '../../css/d/difyt8bxo.css';
import '../../css/i/ia1fafbiq.css';
import '../../css/h/h6ovp6icv.css';
import '../../css/y/yf52dpbxe.css';
import '../../css/t/tgb2nacot.css';
import '../../css/a/aqx0ujnvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="htocrpbkx wm-shadow"/><path class="difyt8bxo"/><path class="ia1fafbiq"/><path class="h6ovp6icv"/><path class="wm-shine yf52dpbxe"/><path class="tgb2nacot wm-deco"/><path class="aqx0ujnvt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sort"} {...others} />);
}

export default Component;

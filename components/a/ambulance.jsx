import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dq4lvpvab.css';
import '../../css/o/oluw-_bml.css';
import '../../css/s/sg0z2bbky.css';
import '../../css/n/nlrn1be0k.css';
import '../../css/o/ohywt7kyw.css';
import '../../css/v/v-29rxvwf.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="dq4lvpvab wm-shadow"/><path class="oluw-_bml"/><path class="sg0z2bbky"/><path class="nlrn1be0k"/><path class="ohywt7kyw"/><path class="v-29rxvwf wm-shine"/><path class="ilvbs_bdh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:ambulance"} {...others} />);
}

export default Component;

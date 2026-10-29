import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klrp4-bbh.css';
import '../../css/p/p480rp_pu.css';
import '../../css/t/tzwa9eblt.css';
import '../../css/o/ohono0bne.css';
import '../../css/c/cod6n8b3i.css';
import '../../css/g/gdkci5bcv.css';
import '../../css/m/mp3vtlqfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="klrp4-bbh wm-k"/><path class="p480rp_pu wm-k"/><path class="tzwa9eblt wm-k"/><path class="ohono0bne wm-shine"/><path class="cod6n8b3i wm-a"/><path class="gdkci5bcv wm-shine"/><path class="mp3vtlqfi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:jalebi"} {...others} />);
}

export default Component;

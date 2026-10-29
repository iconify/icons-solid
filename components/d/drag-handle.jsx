import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dibbkcbas.css';
import '../../css/k/k0sqd2bni.css';
import '../../css/c/cotce_bum.css';
import '../../css/o/oxmd-acca.css';
import '../../css/q/q6fmti2ak.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="dibbkcbas wm-shadow"/><path class="k0sqd2bni"/><path class="cotce_bum"/><path class="oxmd-acca"/><path class="q6fmti2ak wm-deco"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:drag-handle"} {...others} />);
}

export default Component;

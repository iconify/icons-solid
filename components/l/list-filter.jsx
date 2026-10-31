import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ioglu5k3q.css';
import '../../css/n/nyz2pmz_b.css';
import '../../css/b/bkixdbbbp.css';
import '../../css/z/z2fncpiyw.css';
import '../../css/o/ocbqxibxt.css';
import '../../css/u/ui_o2pbmi.css';
import '../../css/i/iu7-1nbea.css';
import '../../css/t/toarbfb_i.css';
import '../../css/p/pjao36ber.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ioglu5k3q wm-shadow"/><path class="nyz2pmz_b wm-k"/><path class="bkixdbbbp wm-k"/><path class="wm-k z2fncpiyw"/><path class="ocbqxibxt wm-shine"/><path class="ui_o2pbmi wm-k"/><path class="iu7-1nbea wm-k"/><path class="toarbfb_i wm-k"/><path class="pjao36ber wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:list-filter"} {...others} />);
}

export default Component;

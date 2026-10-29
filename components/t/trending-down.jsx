import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tk5e3wblg.css';
import '../../css/w/w8pz7bbxl.css';
import '../../css/s/siqepebyv.css';
import '../../css/d/deg04weio.css';
import '../../css/c/cbq_6vb7u.css';
import '../../css/p/pa-59e3td.css';
import '../../css/p/pbdg3tbnl.css';
import '../../css/p/phlgitfou.css';
import '../../css/c/c9ue1eb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tk5e3wblg wm-shadow"/><path class="w8pz7bbxl wm-shadow"/><path class="siqepebyv"/><path class="deg04weio"/><path class="cbq_6vb7u"/><path class="pa-59e3td"/><path class="pbdg3tbnl wm-shine"/><path class="phlgitfou wm-shine"/><path class="c9ue1eb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:trending-down"} {...others} />);
}

export default Component;

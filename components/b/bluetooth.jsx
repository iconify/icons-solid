import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rytkvijgd.css';
import '../../css/b/bn5oakbvg.css';
import '../../css/l/ltilj8gjv.css';
import '../../css/u/ue-v8fatl.css';
import '../../css/j/jnn3pv-he.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rytkvijgd wm-k"/><path class="bn5oakbvg wm-k"/><path class="ltilj8gjv wm-k"/><path class="ue-v8fatl wm-shine"/><path class="jnn3pv-he wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bluetooth"} {...others} />);
}

export default Component;

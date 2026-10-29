import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k1ewr4bgn.css';
import '../../css/m/mf03hhbbg.css';
import '../../css/i/i0gy4iser.css';
import '../../css/p/pmhci7c4q.css';
import '../../css/l/l6x6q3i-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="k1ewr4bgn wm-deco"/><path class="mf03hhbbg wm-deco"/><path class="i0gy4iser wm-k"/><path class="pmhci7c4q wm-a"/><path class="l6x6q3i-w wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-blueprint"} {...others} />);
}

export default Component;

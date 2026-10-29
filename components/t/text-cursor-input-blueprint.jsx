import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h5rhl3b_r.css';
import '../../css/x/xurpiib7h.css';
import '../../css/m/m-y2gobfk.css';
import '../../css/r/rqr48qurw.css';
import '../../css/n/nj1lohb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="h5rhl3b_r wm-deco"/><path class="wm-deco xurpiib7h"/><path class="m-y2gobfk wm-k"/><path class="rqr48qurw wm-k"/><path class="nj1lohb5m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-cursor-input-blueprint"} {...others} />);
}

export default Component;

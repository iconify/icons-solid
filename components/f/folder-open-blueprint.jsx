import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gutk_w9vv.css';
import '../../css/q/qu4cjfqmf.css';
import '../../css/w/wotccxbib.css';
import '../../css/y/ykk3f0biy.css';
import '../../css/v/va6-6v82i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gutk_w9vv wm-deco"/><path class="qu4cjfqmf wm-deco"/><path class="wm-k wotccxbib"/><path class="wm-a ykk3f0biy"/><path class="va6-6v82i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-open-blueprint"} {...others} />);
}

export default Component;

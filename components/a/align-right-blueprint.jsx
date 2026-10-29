import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yw_rco21o.css';
import '../../css/m/mhdr543mh.css';
import '../../css/a/afhkc-a9p.css';
import '../../css/d/dfk4ewnam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yw_rco21o"/><path class="mhdr543mh wm-deco"/><path class="afhkc-a9p"/><path class="dfk4ewnam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-right-blueprint"} {...others} />);
}

export default Component;

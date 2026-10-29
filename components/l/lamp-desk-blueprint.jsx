import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w32z8tpvf.css';
import '../../css/w/wptkt-a9s.css';
import '../../css/i/i28qy_tju.css';
import '../../css/v/v9711tl-s.css';
import '../../css/t/tbb4xab7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="w32z8tpvf wm-deco"/><path class="wm-deco wptkt-a9s"/><path class="i28qy_tju wm-deco"/><path class="v9711tl-s"/><path class="tbb4xab7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lamp-desk-blueprint"} {...others} />);
}

export default Component;

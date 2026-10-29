import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/in75zrbcj.css';
import '../../css/c/ciu7xdbqt.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/w/wv0bv_blz.css';
import '../../css/u/ui32hib9b.css';
import '../../css/w/w22j1sy-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="in75zrbcj wm-deco"/><path class="ciu7xdbqt wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="wm-k wv0bv_blz"/><path class="ui32hib9b wm-a"/><path class="w22j1sy-m wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crown-blueprint"} {...others} />);
}

export default Component;

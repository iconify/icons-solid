import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jxy36dbpi.css';
import '../../css/k/ktox3jbhr.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/h/h3f8sabgh.css';
import '../../css/h/h8wb40b9m.css';
import '../../css/z/ztoi_7bzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jxy36dbpi wm-deco"/><path class="ktox3jbhr wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="h3f8sabgh wm-k"/><path class="h8wb40b9m wm-a"/><path class="wm-k ztoi_7bzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sandwich-blueprint"} {...others} />);
}

export default Component;

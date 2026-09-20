import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/k/ksk-p4h0f.css';
import '../../css/r/r4b2_sbci.css';
import '../../css/i/iz373ssud.css';
import '../../css/x/x2u5nntyo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="ksk-p4h0f"/><path class="r4b2_sbci"/><path class="iz373ssud"/><path clip-rule="evenodd" class="x2u5nntyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:popcorn-duo"} {...others} />);
}

export default Component;

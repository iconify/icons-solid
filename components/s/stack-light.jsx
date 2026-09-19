import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vlnvaebmk.css';
import '../../css/w/wia4z1ukr.css';
import '../../css/d/dcmuo5b9l.css';
import '../../css/o/o11aar4ra.css';
import '../../css/o/omzwef-6n.css';
import '../../css/y/y8b123bxr.css';
import '../../css/h/hmp5qsbie.css';
import '../../css/o/oqtur8bkc.css';
import '../../css/v/vuurdzv_j.css';
import '../../css/y/yt6ly60_q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="vlnvaebmk"/><path class="wia4z1ukr"/><path class="dcmuo5b9l"/><path class="o11aar4ra"/><path class="omzwef-6n"/><path class="y8b123bxr"/><path class="hmp5qsbie"/><path class="oqtur8bkc"/><path class="vuurdzv_j"/><rect class="yt6ly60_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stack-light"} {...others} />);
}

export default Component;

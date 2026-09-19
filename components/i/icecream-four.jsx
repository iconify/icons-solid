import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tldw-pb3f.css';
import '../../css/b/bwz16r81d.css';
import '../../css/x/xo0nxdqxm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tldw-pb3f"/><path class="bwz16r81d"/><path class="xo0nxdqxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:icecream-four"} {...others} />);
}

export default Component;

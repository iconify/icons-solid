import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/owquiwvoo.css';
import '../../css/h/hzcr6-hlc.css';
import '../../css/l/l4srwtbjg.css';
import '../../css/l/lx523s39n.css';
import '../../css/m/m29pyubfl.css';
import '../../css/z/zkt_o3buw.css';
import '../../css/g/gupjyoe4y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="owquiwvoo"/><path class="hzcr6-hlc"/><path class="l4srwtbjg"/><path class="lx523s39n"/><path class="m29pyubfl"/><path class="zkt_o3buw"/><path class="gupjyoe4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stereo-perspective"} {...others} />);
}

export default Component;

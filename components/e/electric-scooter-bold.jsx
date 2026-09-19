import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9ol47byu.css';
import '../../css/g/g3zk5hlpz.css';
import '../../css/m/m7cme73nv.css';
import '../../css/j/j8qsfsb3d.css';
import '../../css/t/tf2-utbvr.css';
import '../../css/l/lu_rn7btb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="w9ol47byu"/><path class="g3zk5hlpz"/><path class="m7cme73nv"/><path class="j8qsfsb3d"/><path clip-rule="evenodd" class="tf2-utbvr"/><path class="lu_rn7btb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:electric-scooter-bold"} {...others} />);
}

export default Component;

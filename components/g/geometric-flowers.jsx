import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lzj8zkbnp.css';
import '../../css/h/h61gupbbc.css';
import '../../css/l/lu0z514vn.css';
import '../../css/y/yuwe4-b3k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="lzj8zkbnp"/><path class="h61gupbbc"/><path class="lu0z514vn"/><path class="yuwe4-b3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:geometric-flowers"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xloh91bms.css';
import '../../css/h/hntrmcb5p.css';
import '../../css/l/lpx3yzhlu.css';
import '../../css/o/o0nhz_tmj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xloh91bms"/><path class="hntrmcb5p"/><path class="lpx3yzhlu"/><path class="o0nhz_tmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:blocks-and-arrows"} {...others} />);
}

export default Component;

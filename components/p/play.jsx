import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/d/dikfgwswa.css';
import '../../css/r/r0ecnhl2m.css';
import '../../css/n/n401421cq.css';
import '../../css/l/l14n6bc8w.css';
import '../../css/m/muhg2v7vc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="dikfgwswa"/><path class="r0ecnhl2m"/><path class="n401421cq"/><path class="l14n6bc8w"/><path class="muhg2v7vc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:play"} {...others} />);
}

export default Component;

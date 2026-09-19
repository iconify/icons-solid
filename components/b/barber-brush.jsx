import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t1m-3cbyl.css';
import '../../css/t/trekx0bes.css';
import '../../css/q/qw89o1y-d.css';
import '../../css/l/lwni21xog.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="t1m-3cbyl"/><path class="trekx0bes"/><path class="qw89o1y-d"/><path class="lwni21xog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:barber-brush"} {...others} />);
}

export default Component;

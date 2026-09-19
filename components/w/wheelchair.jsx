import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/idmny45iu.css';
import '../../css/y/y5tf1hbcj.css';
import '../../css/q/q0hi-bbwb.css';
import '../../css/g/gwqdfgu-c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="idmny45iu"/><path class="y5tf1hbcj"/><path class="q0hi-bbwb"/><path class="gwqdfgu-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:wheelchair"} {...others} />);
}

export default Component;

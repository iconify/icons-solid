import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jumo7rhsr.css';
import '../../css/c/c1piv-2lj.css';
import '../../css/m/mca3ekbcz.css';
import '../../css/l/l-pi_cb3q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jumo7rhsr"/><path class="c1piv-2lj"/><path class="mca3ekbcz"/><path class="l-pi_cb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:message-security"} {...others} />);
}

export default Component;

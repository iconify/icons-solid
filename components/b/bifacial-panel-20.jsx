import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd0f3xbtg.css';
import '../../css/d/d1x_elz9b.css';
import '../../css/h/hlybjobrv.css';
import '../../css/p/pycxazbfr.css';
import '../../css/r/r_-9fdcie.css';
import '../../css/s/she9p-80n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nd0f3xbtg"/><path class="d1x_elz9b"/><path class="hlybjobrv"/><path class="pycxazbfr"/><path class="r_-9fdcie"/><path class="she9p-80n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bifacial-panel-20"} {...others} />);
}

export default Component;

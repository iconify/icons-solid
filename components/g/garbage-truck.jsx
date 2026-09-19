import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bf9hqaclw.css';
import '../../css/e/ec_xsy4gs.css';
import '../../css/a/a0kd3v4hr.css';
import '../../css/x/xdd7caceh.css';
import '../../css/d/dc5f50e_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="bf9hqaclw"/><circle class="ec_xsy4gs"/><path class="a0kd3v4hr"/><path class="xdd7caceh"/><path class="dc5f50e_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:garbage-truck"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tux9qibeh.css';
import '../../css/w/w4kybtbut.css';
import '../../css/i/ijf-f2b6s.css';
import '../../css/q/q07m0d0vz.css';
import '../../css/n/npnp_ub8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tux9qibeh"/><path class="w4kybtbut"/><path class="ijf-f2b6s"/><path class="q07m0d0vz"/><path class="npnp_ub8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gamepad-screen"} {...others} />);
}

export default Component;

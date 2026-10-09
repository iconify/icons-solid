import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/broozz6yg.css';
import '../../css/w/wfx3nk7mg.css';
import '../../css/x/xo6il5w8l.css';
import '../../css/l/la2_xzges.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="broozz6yg"/><path class="wfx3nk7mg"/><path class="xo6il5w8l"/><path class="la2_xzges"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biomethane-plant-48"} {...others} />);
}

export default Component;

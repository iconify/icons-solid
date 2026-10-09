import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk6ndnb1r.css';
import '../../css/v/vrg27460m.css';
import '../../css/w/wfb1t0b7c.css';
import '../../css/i/in04pmbnh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xk6ndnb1r"/><path class="vrg27460m"/><path class="wfb1t0b7c"/><path class="in04pmbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-wind-farm-20-bold"} {...others} />);
}

export default Component;

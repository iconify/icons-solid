import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1pekhtvh.css';
import '../../css/g/gipfg7brd.css';
import '../../css/l/le6qx_s4l.css';
import '../../css/m/mpz045b2n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q1pekhtvh"/><path class="gipfg7brd"/><path class="le6qx_s4l"/><path class="mpz045b2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shovel-20"} {...others} />);
}

export default Component;

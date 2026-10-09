import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqnj4_bfn.css';
import '../../css/i/icilmibae.css';
import '../../css/p/p6ao6xbkt.css';
import '../../css/j/jecgocc5k.css';
import '../../css/q/qxb8801ju.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqnj4_bfn"/><path class="icilmibae"/><path class="p6ao6xbkt"/><path class="jecgocc5k"/><path class="qxb8801ju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-offshore-20"} {...others} />);
}

export default Component;

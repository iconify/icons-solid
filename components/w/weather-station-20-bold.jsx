import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrwoprbeg.css';
import '../../css/f/fe7662b-c.css';
import '../../css/k/kyudrjbij.css';
import '../../css/q/quptbvc9e.css';
import '../../css/w/w0poz4bns.css';
import '../../css/p/p5uqo6r1z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nrwoprbeg"/><path class="fe7662b-c"/><path class="kyudrjbij"/><path class="quptbvc9e"/><path class="w0poz4bns"/><path class="p5uqo6r1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weather-station-20-bold"} {...others} />);
}

export default Component;

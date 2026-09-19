import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it9-ddcwg.css';
import '../../css/i/i63baac3p.css';
import '../../css/d/d0_h8tb0r.css';
import '../../css/x/x-l1_fbym.css';
import '../../css/l/ly7jfmbug.css';
import '../../css/n/noz_l8bxg.css';
import '../../css/x/xtzssnb0p.css';
import '../../css/v/vaf7urbpi.css';
import '../../css/t/taye2wdzi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="it9-ddcwg"/><path class="i63baac3p"/><path class="d0_h8tb0r"/><path class="x-l1_fbym"/><path class="ly7jfmbug"/><path class="noz_l8bxg"/><path class="xtzssnb0p"/><path class="vaf7urbpi"/><path class="taye2wdzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:swimming"} {...others} />);
}

export default Component;

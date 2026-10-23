import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gw5otlx-c.css';
import '../../css/l/l3vlbybwa.css';
import '../../css/a/a7l3r-bgw.css';
import '../../css/v/vs9jabbxc.css';
import '../../css/p/pcbs0_19i.css';
import '../../css/t/t1bibkduf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gw5otlx-c"/><path class="l3vlbybwa"/><path class="a7l3r-bgw"/><path class="vs9jabbxc"/><path class="pcbs0_19i"/><path class="t1bibkduf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lotus"} {...others} />);
}

export default Component;

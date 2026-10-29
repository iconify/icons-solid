import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oqnq33bkc.css';
import '../../css/h/hskfzlbrg.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/g/gknlcviwt.css';
import '../../css/i/ibs3684dw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="oqnq33bkc wm-deco"/><path class="hskfzlbrg wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="gknlcviwt wm-k"/><path class="ibs3684dw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:puja-thali-blueprint"} {...others} />);
}

export default Component;

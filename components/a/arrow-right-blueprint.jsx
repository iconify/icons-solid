import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w2meg0bwg.css';
import '../../css/g/g2znv1bsm.css';
import '../../css/z/zxf-rykue.css';
import '../../css/r/rfbqls1zy.css';
import '../../css/r/rwrp5ib1l.css';
import '../../css/f/f4zz7ocbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="w2meg0bwg wm-deco"/><path class="g2znv1bsm wm-deco"/><path class="wm-k zxf-rykue"/><path class="rfbqls1zy wm-a"/><path class="rwrp5ib1l wm-k"/><path class="f4zz7ocbr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-right-blueprint"} {...others} />);
}

export default Component;

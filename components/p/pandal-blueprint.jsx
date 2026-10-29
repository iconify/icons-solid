import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v2y1lnbbd.css';
import '../../css/r/rkgtq2bmh.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/i/iu3-f2bbu.css';
import '../../css/w/wel5s3bkq.css';
import '../../css/o/osjj5pbsf.css';
import '../../css/m/m53xtc5ml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="v2y1lnbbd wm-deco"/><path class="rkgtq2bmh wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="iu3-f2bbu wm-k"/><path class="wel5s3bkq wm-a"/><path class="osjj5pbsf wm-a"/><path class="m53xtc5ml wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pandal-blueprint"} {...others} />);
}

export default Component;

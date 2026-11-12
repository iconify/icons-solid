import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7mod0buz.css';
import '../../css/o/ocptewqqw.css';
import '../../css/i/ijztyk31e.css';
import '../../css/k/ku9pfdmeo.css';
import '../../css/v/vvaeqhbvo.css';
import '../../css/e/e6423hy6s.css';
import '../../css/y/yo_29acsv.css';
import '../../css/z/z2e8dhbzi.css';
import '../../css/p/pafcigboq.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGICEVEUjm" x1="256.1" x2="256.1" y2="512.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="j7mod0buz"/><stop offset=".21" class="ocptewqqw"/><stop offset=".41" class="ijztyk31e"/><stop offset=".58" class="ku9pfdmeo"/><stop offset=".74" class="vvaeqhbvo"/><stop offset=".87" class="e6423hy6s"/><stop offset="1" class="yo_29acsv"/></linearGradient><path fill="url(#SVGICEVEUjm)" class="z2e8dhbzi"/><path class="pafcigboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:steam"} {...others} />);
}

export default Component;

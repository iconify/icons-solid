import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/urvjm_ymr.css';
import '../../css/o/o85hb142l.css';
import '../../css/w/wu-2fgbxv.css';
import '../../css/a/aqrzy7b8m.css';
import '../../css/s/see2fgboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="urvjm_ymr"/><path class="o85hb142l"/><path class="wu-2fgbxv"/><path class="aqrzy7b8m"/><path class="see2fgboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:electric-refueling-broken"} {...others} />);
}

export default Component;

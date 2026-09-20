import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vw_3nbc9h.css';
import '../../css/r/r1ahr6bce.css';
import '../../css/g/geoy4rbnm.css';
import '../../css/v/v5olznbck.css';
import '../../css/v/vlgjcopth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vw_3nbc9h"/><path class="r1ahr6bce"/><path class="geoy4rbnm"/><path class="v5olznbck"/><path class="vlgjcopth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:programming-language-monitor-css"} {...others} />);
}

export default Component;

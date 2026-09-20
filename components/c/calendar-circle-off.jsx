import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/g/giwrxbc9c.css';
import '../../css/f/f589aobdb.css';
import '../../css/i/i278szqpx.css';
import '../../css/y/y-0yi6qaz.css';
import '../../css/m/mo5netbri.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g transform="translate(3 3)"><rect class="giwrxbc9c"/><path clip-rule="evenodd" class="f589aobdb"/><path clip-rule="evenodd" class="i278szqpx"/><path class="y-0yi6qaz"/><path class="mo5netbri"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:calendar-circle-off"} {...others} />);
}

export default Component;

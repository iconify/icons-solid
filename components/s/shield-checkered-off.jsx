import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/cdva7wozz.css';
import '../../css/s/skhrg6tbu.css';
import '../../css/i/iezb6eb_v.css';
import '../../css/n/n9eijwbwv.css';
import '../../css/z/zbgn4_-_c.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="cdva7wozz"/><path clip-rule="evenodd" class="skhrg6tbu"/></g><path clip-rule="evenodd" class="iezb6eb_v"/><path class="n9eijwbwv"/><path class="zbgn4_-_c"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:shield-checkered-off"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xihcqkywo.css';
import '../../css/e/ezm47iq7s.css';
import '../../css/m/my8_67jze.css';
import '../../css/t/tgi5r_bvn.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xihcqkywo"/><path clip-rule="evenodd" class="ezm47iq7s"/><path clip-rule="evenodd" class="my8_67jze"/><path clip-rule="evenodd" class="tgi5r_bvn"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:yen-off"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lk387obkc.css';
import '../../css/z/zeh2m0rdk.css';
import '../../css/q/q-3psc-ot.css';
import '../../css/c/c0rqgbbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="lk387obkc"/><path class="zeh2m0rdk"/><path class="q-3psc-ot"/><path class="c0rqgbbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:running-round-broken"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lk387obkc.css';
import '../../css/p/pek1alrpa.css';
import '../../css/w/w85uyrb9b.css';
import '../../css/r/r5_bl8ihy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="lk387obkc"/><path class="pek1alrpa"/><path class="w85uyrb9b"/><path class="r5_bl8ihy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:running-2-linear"} {...others} />);
}

export default Component;

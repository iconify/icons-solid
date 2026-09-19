import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wkf68dc_y.css';
import '../../css/j/j7f8uloue.css';
import '../../css/u/up633pbfd.css';
import '../../css/n/n76tg__gz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wkf68dc_y"/><path class="j7f8uloue"/><path class="up633pbfd"/><path class="n76tg__gz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bomb"} {...others} />);
}

export default Component;

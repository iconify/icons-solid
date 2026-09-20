import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l80i0rb1m.css';
import '../../css/d/ds_zifb7n.css';
import '../../css/r/rwmcjfboi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l80i0rb1m"/><path class="ds_zifb7n"/><path class="rwmcjfboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-bold-circle-line-duotone"} {...others} />);
}

export default Component;

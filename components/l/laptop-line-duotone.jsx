import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iqwgs_b2i.css';
import '../../css/w/wk0l59qvo.css';
import '../../css/q/qs6p1db2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iqwgs_b2i"/><path class="wk0l59qvo"/><path class="qs6p1db2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-line-duotone"} {...others} />);
}

export default Component;

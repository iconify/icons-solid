import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/ggvf3nb4s.css';
import '../../css/c/cw0dg-bgf.css';
import '../../css/e/erekrcbav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ggvf3nb4s"/><path class="cw0dg-bgf"/><path class="erekrcbav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-update-broken"} {...others} />);
}

export default Component;

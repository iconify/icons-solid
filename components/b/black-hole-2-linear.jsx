import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/y/yaa3skbyc.css';
import '../../css/k/kgb3mbbsa.css';
import '../../css/t/ta4khdrwc.css';
import '../../css/z/zgyerrblx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="yaa3skbyc"/><path class="kgb3mbbsa"/><path class="ta4khdrwc"/><path class="zgyerrblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-2-linear"} {...others} />);
}

export default Component;

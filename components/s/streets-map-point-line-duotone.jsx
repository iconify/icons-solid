import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/l/loa18gbiz.css';
import '../../css/d/dijqohbja.css';
import '../../css/a/a9qq5obmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="loa18gbiz"/><path class="dijqohbja"/><path class="a9qq5obmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-map-point-line-duotone"} {...others} />);
}

export default Component;

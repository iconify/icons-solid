import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mw9a2m02n.css';
import '../../css/a/a7_qblosi.css';
import '../../css/v/vgpahk0tv.css';
import '../../css/v/v2kjfgb-s.css';
import '../../css/j/jehd3zbqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mw9a2m02n"/><path class="a7_qblosi"/><path class="vgpahk0tv"/><path class="v2kjfgb-s"/><path class="jehd3zbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:figma-line-duotone"} {...others} />);
}

export default Component;

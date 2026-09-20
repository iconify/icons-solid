import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ysr2z3hud.css';
import '../../css/a/agv7b5b0y.css';
import '../../css/i/iflu5x86c.css';
import '../../css/i/iqww668fj.css';
import '../../css/g/g9dcdd6st.css';
import '../../css/h/hx-wuc0xm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ysr2z3hud"/><path class="agv7b5b0y"/><path class="iflu5x86c"/><path class="iqww668fj"/><path class="g9dcdd6st"/><path class="hx-wuc0xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-2-line-duotone"} {...others} />);
}

export default Component;

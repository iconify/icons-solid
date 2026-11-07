import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/plbs7_b_u.css';
import '../../css/f/fyp478bsy.css';
import '../../css/r/r7-rdsqaq.css';
import '../../css/i/il_gdve3e.css';
import '../../css/h/hw-5-kgoz.css';
import '../../css/u/utiw4jbqs.css';
import '../../css/n/nhunzz9zc.css';
import '../../css/z/zlsyrsb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="plbs7_b_u"/><path class="fyp478bsy"/><path class="r7-rdsqaq"/><path class="il_gdve3e"/><path class="hw-5-kgoz"/><path class="utiw4jbqs"/><path class="nhunzz9zc"/><path class="zlsyrsb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-replace-line-duotone"} {...others} />);
}

export default Component;

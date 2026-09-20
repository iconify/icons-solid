import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tslmujbuk.css';
import '../../css/j/jswmtpb4p.css';
import '../../css/b/b--td4bgk.css';
import '../../css/k/kzojlpkqw.css';
import '../../css/b/bx1996_eu.css';
import '../../css/p/pd6vqjbhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tslmujbuk"/><path class="jswmtpb4p"/><path class="b--td4bgk"/><path class="kzojlpkqw"/><path class="bx1996_eu"/><path class="pd6vqjbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-charge-broken"} {...others} />);
}

export default Component;

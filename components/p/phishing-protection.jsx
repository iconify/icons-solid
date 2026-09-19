import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/am9fccc0p.css';
import '../../css/f/fq0dqwbas.css';
import '../../css/o/oc7n7eb6l.css';
import '../../css/k/k6fqsgy7j.css';
import '../../css/f/f8g_48poh.css';
import '../../css/i/iiq4imbmx.css';
import '../../css/e/elo-2gh4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="am9fccc0p"/><path class="fq0dqwbas"/><path class="oc7n7eb6l"/><path class="k6fqsgy7j"/><path class="f8g_48poh"/><path class="iiq4imbmx"/><path class="elo-2gh4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:phishing-protection"} {...others} />);
}

export default Component;

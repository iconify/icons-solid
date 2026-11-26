import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fc7yyg80f.css';
import '../../css/w/wb84icb0c.css';
import '../../css/k/kjnmnob7q.css';
import '../../css/d/dwtzfob_c.css';
import '../../css/n/ng5jwse9q.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGiQSI9cxC" cx="78" cy="77.9" r="125.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="fc7yyg80f"/><stop offset=".85" class="wb84icb0c"/><stop offset="1" class="wb84icb0c"/></radialGradient></defs><path class="kjnmnob7q"/><path fill="url(#SVGiQSI9cxC)" transform="matrix(2.8 0 0 2.8 -22.514 -22.514)" class="dwtzfob_c"/><path class="ng5jwse9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:part-alternation-mark"} {...others} />);
}

export default Component;

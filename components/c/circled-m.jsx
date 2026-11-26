import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru36gnb2i.css';
import '../../css/g/gdp-lpbgi.css';
import '../../css/v/vw3tki-bo.css';
import '../../css/u/uxkqenqls.css';
import '../../css/k/khgwehb6e.css';
import '../../css/l/ltga-abyf.css';
import '../../css/j/j-ar_6bdr.css';
import '../../css/p/pq0srtbgy.css';
import '../../css/n/njlk6rbks.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGogjXkdLO" cx="76.5" cy="100" r="134.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="ru36gnb2i"/><stop offset=".85" class="gdp-lpbgi"/><stop offset="1" class="gdp-lpbgi"/></radialGradient></defs><path class="vw3tki-bo"/><path fill="url(#SVGogjXkdLO)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="uxkqenqls"/><path class="khgwehb6e"/><path class="ltga-abyf"/><path class="j-ar_6bdr"/><path class="pq0srtbgy"/><path class="njlk6rbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:circled-m"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2wvu6s6z.css';
import '../../css/u/uat9422lg.css';
import '../../css/u/uee0bnb9m.css';
import '../../css/k/k2qweuboq.css';
import '../../css/t/txoidkb6v.css';
import '../../css/t/ti19ytbje.css';
import '../../css/j/j2ibbyx1m.css';
import '../../css/x/xae8w1z-b.css';
import '../../css/f/f022np9-p.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGD7ySdeJO" cx="66.2" cy="55.2" r="147.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="d2wvu6s6z"/><stop offset=".85" class="uat9422lg"/><stop offset="1" class="uat9422lg"/></radialGradient></defs><path class="uee0bnb9m"/><path fill="url(#SVGD7ySdeJO)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="k2qweuboq"/><path class="txoidkb6v"/><path class="ti19ytbje"/><path class="j2ibbyx1m"/><path class="xae8w1z-b"/><path class="f022np9-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:id-button"} {...others} />);
}

export default Component;

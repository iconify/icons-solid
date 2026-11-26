import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb72bi6eb.css';
import '../../css/b/bzihgdckd.css';
import '../../css/u/uee0bnb9m.css';
import '../../css/k/k2qweuboq.css';
import '../../css/e/emq9thfac.css';
import '../../css/t/ti19ytbje.css';
import '../../css/j/j2ibbyx1m.css';
import '../../css/z/zogxgab5j.css';
import '../../css/n/n29dlgb1j.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGhijeCrEj" cx="66.2" cy="55.2" r="147.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="lb72bi6eb"/><stop offset=".85" class="bzihgdckd"/><stop offset="1" class="bzihgdckd"/></radialGradient></defs><path class="uee0bnb9m"/><path fill="url(#SVGhijeCrEj)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="k2qweuboq"/><path class="emq9thfac"/><path class="ti19ytbje"/><path class="j2ibbyx1m"/><path class="zogxgab5j"/><path class="n29dlgb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:eight-pointed-star"} {...others} />);
}

export default Component;

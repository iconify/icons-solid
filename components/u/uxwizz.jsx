import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbqxqhbuz.css';
import '../../css/k/k3vmc948u.css';
import '../../css/m/mub0vqb3k.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGoBxerdDg" x2="1" gradientTransform="matrix(398.66986 0 0 -511.99995 56.67 512)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pbqxqhbuz"/><stop offset="1" class="k3vmc948u"/></linearGradient><path fill="url(#SVGoBxerdDg)" class="mub0vqb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:uxwizz"} {...others} />);
}

export default Component;

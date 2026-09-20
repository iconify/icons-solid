import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkophvw2v.css';
import '../../css/t/tgf-0vqby.css';
import '../../css/s/stui2mbih.css';
import '../../css/d/dty293bfj.css';
import '../../css/i/iycln-b8i.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="pkophvw2v"/><path class="tgf-0vqby"/><radialGradient id="SVGItWtYbon" cx="1008.252" cy="1668.755" r="800" gradientTransform="matrix(.32 0 0 .32 -66.64 -278.002)" gradientUnits="userSpaceOnUse"><stop offset="0" class="stui2mbih"/><stop offset=".806" class="stui2mbih"/><stop offset="1" class="dty293bfj"/></radialGradient><circle fill="url(#SVGItWtYbon)" class="iycln-b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pepperminty-wiki"} {...others} />);
}

export default Component;

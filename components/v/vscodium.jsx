import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwuxu7bdj.css';
import '../../css/z/zkrs_kb_e.css';
import '../../css/v/v4_he7buw.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGMt2BCx9i" x1="199.997" x2="296.665" y1="214.302" y2="307.573" gradientTransform="translate(-256 -272.64)scale(1.28)" gradientUnits="userSpaceOnUse"><stop offset="0" class="bwuxu7bdj"/><stop offset="1" class="zkrs_kb_e"/></linearGradient></defs><path fill="url(#SVGMt2BCx9i)" class="v4_he7buw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vscodium"} {...others} />);
}

export default Component;

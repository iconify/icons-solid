import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_7v919ts.css';
import '../../css/k/kcaaivr8d.css';
import '../../css/d/d048q5y4w.css';
import '../../css/n/nfvofkbbc.css';
import '../../css/u/uyqfu3n8u.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVGrNnxWdxO" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-60 88.792 30.85)scale(109.282)" gradientUnits="userSpaceOnUse"><stop offset="0" class="a_7v919ts"/><stop offset=".6" class="kcaaivr8d"/><stop offset="1" class="d048q5y4w"/></linearGradient></defs><path fill="url(#SVGrNnxWdxO)" transform="matrix(6.4 0 0 6.4 -32 -32)" class="nfvofkbbc"/><path class="uyqfu3n8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:zoom-2025-dark"} {...others} />);
}

export default Component;

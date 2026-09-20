import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/p/pshr00bvs.css';
import '../../css/v/vw7nbibyx.css';
import '../../css/o/okzjhjbnf.css';
import '../../css/m/mv0xm5bnb.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><radialGradient id="SVGop6VgDeN" cx="93.44" cy="1113.51" r="69.83" gradientTransform="matrix(1 0 0 -1 0 1148.01)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="pshr00bvs"/></radialGradient></defs><path class="vw7nbibyx"/><path class="okzjhjbnf"/><path fill="url(#SVGop6VgDeN)" class="mv0xm5bnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ceylon"} {...others} />);
}

export default Component;

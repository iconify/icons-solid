import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcp55d7oz.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qzlrvccue.css';
import '../../css/u/u0rsgfb1c.css';
import '../../css/s/s1969dftv.css';
import '../../css/s/soqxjmbnf.css';
import '../../css/w/w3wpb7tov.css';
import '../../css/j/jspuefb_u.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGBHMIHeMC"><path class="pcp55d7oz"/></clipPath></defs><g clip-path="url(#SVGBHMIHeMC)" transform="translate(84.9)scale(.9375)" class="d2kvgvbvc"><path class="qzlrvccue"/><path class="u0rsgfb1c"/><path class="s1969dftv"/><path class="soqxjmbnf"/><path class="w3wpb7tov"/><path class="jspuefb_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bi-4x3"} {...others} />);
}

export default Component;

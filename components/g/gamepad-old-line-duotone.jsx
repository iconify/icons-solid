import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/caog0qvka.css';
import '../../css/r/r1y31rr1f.css';
import '../../css/z/z9n9raclw.css';
import '../../css/h/hxi5c3b8i.css';
import '../../css/o/opfsj7bhx.css';
import '../../css/t/t-lavp4nf.css';
import '../../css/f/fng6irbns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG6WNJNcPe)" class="caog0qvka"><path class="r1y31rr1f"/><path class="z9n9raclw"/><path class="hxi5c3b8i"/><path class="opfsj7bhx"/><path class="t-lavp4nf"/></g><defs><clipPath id="SVG6WNJNcPe"><rect class="fng6irbns"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-old-line-duotone"} {...others} />);
}

export default Component;

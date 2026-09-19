import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7_aqub-c.css';
import '../../css/t/tcimq1bdm.css';
import '../../css/x/x3wytyg0f.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><clipPath id="SVGrR3hXb3H"><path class="f7_aqub-c"/></clipPath></defs><g clip-path="url(#SVGrR3hXb3H)"><path class="tcimq1bdm"/></g><path class="x3wytyg0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sema-wordmark"} {...others} />);
}

export default Component;

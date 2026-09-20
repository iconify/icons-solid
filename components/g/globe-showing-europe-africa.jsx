import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/s/sz-_5oksg.css';
import '../../css/b/b8-s-pb5c.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/usozxnbrm.css';
import '../../css/e/e1-k7lb8s.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><circle class="sz-_5oksg"/><path class="b8-s-pb5c"/></g><g class="ij2x_72vy"><circle class="usozxnbrm"/><path class="e1-k7lb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:globe-showing-europe-africa"} {...others} />);
}

export default Component;

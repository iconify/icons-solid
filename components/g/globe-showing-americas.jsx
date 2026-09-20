import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/s/sz-_5oksg.css';
import '../../css/v/vv6n5srqa.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/usozxnbrm.css';
import '../../css/z/z-z_l7bta.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><circle class="sz-_5oksg"/><path class="vv6n5srqa"/></g><g class="ij2x_72vy"><circle class="usozxnbrm"/><path class="z-z_l7bta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:globe-showing-americas"} {...others} />);
}

export default Component;

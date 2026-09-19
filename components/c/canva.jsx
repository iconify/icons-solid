import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyji3vb3h.css';
import '../../css/b/b3dn0_1qr.css';
import '../../css/e/e1a212beq.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="nyji3vb3h"><path class="b3dn0_1qr"/><path class="e1a212beq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:canva"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyj2m2zvd.css';
import '../../css/p/pfqxaibpf.css';
import '../../css/b/b9siywb_v.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="eyj2m2zvd"/><path class="pfqxaibpf"/><circle class="b9siywb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:la"} {...others} />);
}

export default Component;

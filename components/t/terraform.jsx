import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zv06l1bpv.css';
import '../../css/h/hcafqxmbj.css';
import '../../css/k/kdt1gpbcl.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="d2kvgvbvc"><path class="zv06l1bpv"/><path class="hcafqxmbj"/><path class="kdt1gpbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:terraform"} {...others} />);
}

export default Component;

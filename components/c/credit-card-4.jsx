import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/opxnc6bmd.css';
import '../../css/w/w4ndirbqr.css';
import '../../css/t/toa8mgbjl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="opxnc6bmd"/><path class="w4ndirbqr"/><path class="toa8mgbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:credit-card-4"} {...others} />);
}

export default Component;

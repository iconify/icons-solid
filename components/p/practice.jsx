import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zykygspcz.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/e-bowfbeh.css';
import '../../css/q/q0zdt2bln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zykygspcz"/><g class="mc2zb0bvp"><path class="e-bowfbeh"/><circle class="q0zdt2bln"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:practice"} {...others} />);
}

export default Component;

import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4e_yzgqd.css';
import '../../css/f/fbu3f96ig.css';
import '../../css/k/k9x6zhdhd.css';
import '../../css/p/p9-mz9bbv.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="t4e_yzgqd"/><path class="fbu3f96ig"/><path class="k9x6zhdhd"/><path class="p9-mz9bbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sg"} {...others} />);
}

export default Component;

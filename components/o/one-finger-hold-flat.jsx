import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olotni_mv.css';
import '../../css/d/d3g494bhb.css';
import '../../css/q/qd00t-bpn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="olotni_mv"/><path class="d3g494bhb"/><path clip-rule="evenodd" class="qd00t-bpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:one-finger-hold-flat"} {...others} />);
}

export default Component;

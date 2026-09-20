import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxc6vr24n.css';
import '../../css/t/t97kcpfjv.css';
import '../../css/j/jgjjp7t-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="mxc6vr24n"/><path class="t97kcpfjv"/><rect class="jgjjp7t-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:user-box"} {...others} />);
}

export default Component;

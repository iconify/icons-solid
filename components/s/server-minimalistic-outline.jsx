import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sz975jbqe.css';
import '../../css/v/v861yyx4s.css';
import '../../css/m/mhbrbobvd.css';
import '../../css/n/nb69bhbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sz975jbqe"/><path class="v861yyx4s"/><path class="mhbrbobvd"/><path class="nb69bhbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-minimalistic-outline"} {...others} />);
}

export default Component;

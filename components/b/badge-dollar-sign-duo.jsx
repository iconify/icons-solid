import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lfddx0u7v.css';
import '../../css/s/sv9nxnpyo.css';
import '../../css/h/hooc3vbcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lfddx0u7v"/><path class="sv9nxnpyo wm-a"/><path class="hooc3vbcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:badge-dollar-sign-duo"} {...others} />);
}

export default Component;

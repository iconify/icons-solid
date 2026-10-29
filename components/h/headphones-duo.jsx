import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j5cyxpnlx.css';
import '../../css/r/r0v6itbzy.css';
import '../../css/l/ltpyfabni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j5cyxpnlx"/><path class="r0v6itbzy wm-a"/><path class="ltpyfabni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:headphones-duo"} {...others} />);
}

export default Component;

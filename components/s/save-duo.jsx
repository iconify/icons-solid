import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l_dr-jbem.css';
import '../../css/t/t2srnhboy.css';
import '../../css/s/svvk-3k2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l_dr-jbem"/><path class="t2srnhboy wm-a"/><path class="svvk-3k2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:save-duo"} {...others} />);
}

export default Component;
